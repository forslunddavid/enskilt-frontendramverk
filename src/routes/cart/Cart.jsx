import { useRecoilState } from "recoil"
import cartItems from "../state/cartItems.js"
import { useParams } from "react-router-dom"

const Cart = () => {
	const { id } = useParams()
	const [cart, setCart] = useRecoilState(cartItems)
	const totalPrice = cart.reduce((a, b) => a + b.price, 0)

	const handleQuantity = (e, item) => {
		item.quantity = e.target.value
		setCart([...cart])
	}

	const handleDelete = (item) => {
		setCart(cart.filter((i) => i !== item))
	}

	return (
		<div>
			<div>
				{cart.map((item) => (
					<>
						<div key={id}>
							{/* <img src={item.picture} alt={item.name} /> */}
							<p>{item.name}</p>
							<p>{item.price}$</p>
							<input
								type="number"
								value={item.quantity}
								onChange={(e) => handleQuantity(e, item)}
							/>
							<button onClick={() => handleDelete(item)}>
								Delete
							</button>
						</div>
					</>
				))}
			</div>
			<p>Total Price: {totalPrice}$</p>
		</div>
	)
}

export default Cart
