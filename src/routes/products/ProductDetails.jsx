import { useState } from "react"
import { url, shopId } from "../../data/constants"

const ProductDetails = () => {
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
