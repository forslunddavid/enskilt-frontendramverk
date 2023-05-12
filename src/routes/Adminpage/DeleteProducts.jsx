import { useState, useEffect } from "react"
import { url, shopId } from "../../data/constants"
import "./admin.css"

const DeleteProducts = () => {
	// Initialize state for products using useState hook
	const [products, setProducts] = useState([])

	// Fetch products from API using useEffect hook when component mounts
	useEffect(() => {
		async function getProducts() {
			const response = await fetch(
				url + "?action=get-products&shopid=" + shopId
			)
			const data = await response.json()
			setProducts(data)
		}
		getProducts()
	}, [])

	// Define function to handle delete button click
	const handleDelete = async (id) => {
		await fetch(`/api/products/${id}`, { method: "DELETE" })
		setProducts(products.filter((p) => p.id !== id))
	}

	return (
		<>
			<ul>
				{products.map((product) => (
					<li className="card" key={product.id}>
						<img
							className="product-image"
							src={product.picture}
							alt={product.name}
						/>
						<p>{product.name}</p>
						<button onClick={() => handleDelete(product.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default DeleteProducts
