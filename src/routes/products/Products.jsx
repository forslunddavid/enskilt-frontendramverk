import { url, shopId } from "../../data/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import searchIcon from "../../assets/SearchOutline.svg"
import "./products.css"
import productAtom from "../state/productAtom.js"
import { useRecoilState } from "recoil"

const Products = () => {
	const [products, setProducts] = useRecoilState(productAtom)
	// const [products, setProducts] = useState
	const [search, setSearch] = useState("")
	const [filteredProducts, setFilteredProducts] = useState(products)
	const [searchShown, setSearchShown] = useState(false)
	console.log("products: ", products, filteredProducts)
	// This effect updates the filtered products based on all products whenever products state is updated
	useEffect(() => {
		setFilteredProducts(products)
	}, [products])

	// This effect fetches the products from the server and updates the products state when component mounts
	useEffect(() => {
		async function getProducts() {
			try {
				const response = await fetch(
					url + "?action=get-products&shopid=" + shopId
				)
				const data = await response.json()
				setProducts(data) // Update products state
			} catch (error) {
				console.error("failed to get items", error)
			}
		}
		getProducts()
	}, [])

	// This function updates the search query and filtered products based on the search query
	const handleSearch = (e) => {
		const search = e.target.value
		setSearch(search)
		if (search) {
			const filtered = products.filter((p) =>
				p.name.toLowerCase().includes(search.toLowerCase())
			)
			setFilteredProducts(filtered)
		} else {
			setFilteredProducts(products)
		}
	}

	// Render the Products component
	return (
		<>
			<div className="searchicon">
				<img
					src={searchIcon}
					alt="Search Logo"
					onClick={() => setSearchShown(!searchShown)}
				/>
				{searchShown && (
					<input type="text" value={search} onChange={handleSearch} />
				)}
			</div>
			<div>
				<ul className="">
					{filteredProducts.map((product) => (
						<Link
							to={`/products/${product.id}`}
							key={product.id}
							product={product}
						>
							<li className="card">
								<img
									className="product-image"
									src={product.picture}
									alt={product.name}
								/>
								<p>{product.name}</p>
								<p>{product.price}$</p>{" "}
								<p className="product-description">
									{product.description}
								</p>{" "}
							</li>{" "}
						</Link>
					))}
				</ul>{" "}
			</div>
		</>
	)
}

export default Products
