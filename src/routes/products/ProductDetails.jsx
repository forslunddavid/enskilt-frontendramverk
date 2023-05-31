import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import productAtom from "../state/productAtom.js"
import cartItems from "../state/cartItems.js"

const ProductDetails = () => {
	// Get the product atom from Recoil and the cart items from state
	const [products] = useRecoilState(productAtom)
	const [cart, setCart] = useRecoilState(cartItems)

	// Get the product ID from the URL params
	const { id } = useParams()

	// Find the product object based on the ID
	const product = products.find((product) => product.id === Number(id))

	// Render an error message if the product is not found
	if (!product) {
		return <h1>Product not found</h1>
	}

	// Add the selected product to the cart
	const AddToCart = (product) => {
		let newCart = [...cart]
		let index = newCart.findIndex((i) => i.id === product.id)
		if (index > -1) {
			newCart[index] = {
				...JSON.parse(JSON.stringify(newCart[index])),
				quantity: newCart[index].quantity + 1,
			}
		} else {
			newCart.push({
				...JSON.parse(JSON.stringify(product)),
				quantity: 1,
			})
		}
		setCart(newCart)
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
		</div>
	)
}

export default ProductDetails
