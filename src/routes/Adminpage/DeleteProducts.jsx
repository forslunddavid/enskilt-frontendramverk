import { useState, useEffect } from "react"
import { url, shopId } from "../../data/constants"
import "./admin.css"

const DeleteProducts = () => {
	const [products, setProducts] = useState([])

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
