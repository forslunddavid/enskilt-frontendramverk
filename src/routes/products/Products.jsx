import { url, shopId } from "../../data/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import searchIcon from "../../assets/SearchOutline.svg"
import "./products.css"

const Products = () => {
	const [products, setProducts] = useState([])
	const [search, setSearch] = useState("")
	const [filteredProducts, setFilteredProducts] = useState(products)
	const [searchShown, setSearchShown] = useState(false)

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await fetch(
					url + "?action=get-products&shopid=" + shopId
				)
				const data = await response.json()
				setProducts(data)
			} catch (error) {
				console.error("failed to get items", error)
			}
		}
		getProducts()
	}, [])

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

	return (
		<>
			<div className="searchicon">
				{searchShown && (
					<input type="text" value={search} onChange={handleSearch} />
				)}
				<img
					src={searchIcon}
					alt="Search Logo"
					onClick={() => setSearchShown(!searchShown)}
				/>
			</div>{" "}
			<div>
				{" "}
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
// export { products }
