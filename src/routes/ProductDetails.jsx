const ProductDetails = ({ product }) => {
	return (
		<div className="product-details">
			<img src={product.picture} alt={product.name} />
			<h1>{product.name}</h1>
			<p>{product.price}</p>
		</div>
	)
}
export default ProductDetails
