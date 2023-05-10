import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import productAtom from "../state/productAtom.js"
import cartItems from "../state/cartItems.js"

const ProductDetails = () => {
	const [products] = useRecoilState(productAtom)
	const [cart, setCart] = useRecoilState(cartItems)
	const { id } = useParams()

	const product = products.find((product) => product.id === Number(id))

	if (!product) {
		return <h1>Product not found</h1>
	}

	const AddToCart = (product) => {
		setCart((cart) => [...cart, product])
	}

	return (
		<div>
			<li className="detail-card">
				<img
					className="product-image"
					src={product.picture}
					alt={product.name}
				/>

				<div className="add-to-cart">
					<p>{product.name}</p>
					<button
						className="add-to-cart-button"
						onClick={() => AddToCart(product)}
					>
						Add to Cart
					</button>
				</div>

				<p>{product.price}$</p>
				<p>{product.description}</p>
			</li>
			<div></div>
		</div>
	)
}

export default ProductDetails
