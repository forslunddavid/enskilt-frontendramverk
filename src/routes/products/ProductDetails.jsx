import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { url, shopId } from "../../data/constants"

const ProductDetails = () => {
	const { shopId } = useParams()
	const [product, setProduct] = useState({})

	useEffect(() => {
		async function getProductDetails() {
			try {
				const response = await fetch(
					url + "?action=get-product-details&id=" + shopId
				)
				const data = await response.json()
				setProduct(data)
			} catch (error) {
				console.error("failed to get product details", error)
			}
		}
		getProductDetails()
	}, [shopId])

	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.picture} alt={product.name} />
			<p>{product.description}</p>
			<p>{product.price}$</p>
		</div>
	)
}

export default ProductDetails
