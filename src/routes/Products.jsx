import Card from "./card/Card"
import { useEffect, useState } from "react"

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("/api/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
	}, [])

	return (
		<div>
			{products.map((product) => (
				<Card product={product} key={product.id} />
			))}
		</div>
	)
}

export default Products
