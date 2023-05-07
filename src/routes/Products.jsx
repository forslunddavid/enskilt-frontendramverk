import Card from "./card/Card"
import { url, shopId } from "../data/constants"
import { useEffect, useState } from "react"

const Products = () => {
	const [product, setProduct] = useState([])
	useEffect(() => {
		async function getProducts() {
			try {
				const response = await fetch(
					url + "?action=get-products&shopid=" + shopId
				)
				const data = await response.json()
				setProduct(data)
			} catch (error) {
				console.error("failed to get items", error)
			}
		}
		getProducts()
	}, [])

	return (
		<div>
			<ul className="">
				{product.map((product) => (
					<li key={product.id}>
						<h4>Produkter</h4>
						<p>{product.name}</p>
						<p>{product.price}</p>
						<p>{product.description}</p>
						<img className="product-image" src={product.picture} />
					</li>
				))}
			</ul>
			<Card />
		</div>
	)
}

export default Products
