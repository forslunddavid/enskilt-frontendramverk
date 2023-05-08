import { url, shopId } from "../../data/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./products.css"

const Products = () => {
	const [products, setProducts] = useState([])

	async function deleteProduct(id) {
		try {
			const response = await fetch(
				url + "?action=delete-product&id=" + id,
				{
					method: "POST",
				}
			)
		} catch (err) {
			console.log(err)
		}
	}

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

	return (
		<div>
			<ul className="">
				{products.map((product) => (
					<Link to={`/products/${product.id}`} key={product.id}>
						<li className="card">
							<img
								className="product-image"
								src={product.picture}
								alt={product.name}
							/>
							<p>{product.name}</p>
							<p>{product.price}$</p>
							<p>{product.description}</p>
							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation()
									deleteProduct(product.id)
								}}
							>
								X
							</button>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Products
