import { useRecoilState } from "recoil"
import cartItems from "../state/cartItems.js"
// import { useParams } from "react-router-dom"
import { useState } from "react"
import "./cart.css"

const Cart = () => {
	// const { id } = useParams()
	const [cart, setCart] = useRecoilState(cartItems)
	const totalPrice = cart.reduce((a, b) => a + b.price, 0)
	const [totPrice, setTotPrice] = useState(totalPrice)

	const handleQuantity = (e, item) => {
		let updatedItem = { ...item }
		console.log(item, "item")
		updatedItem.quantity = e.target.value
		let newCart = [...cart]
		let index = newCart.findIndex((i) => i.id === updatedItem.id)
		if (index > -1) {
			newCart.splice(index, 1, updatedItem)
			setCart(newCart)
		} else console.log(index, "index")
		console.log(newCart, "newCart")
		let newSum = 0
		for (let i = 0; i < newCart.length; i++) {
			let itemSum = 0
			if (newCart[i].quantity) {
				itemSum = newCart[i].price * newCart[i].quantity
			} else {
				itemSum = newCart[i].price
			}
			newSum = newSum + itemSum
		}
		setTotPrice(newSum)
	}

	const handleDelete = (item) => {
		setCart(cart.filter((i) => i !== item))
	}

	return (
		<section>
			<div>
				{cart.length > 0 ? (
					<section className="cart-container">
						{cart.map((item) => (
							<div className="cart-item" key={item.id}>
								<p>{item.name}</p>
								<p>{item.price}$</p>
								<input
									className="item-quantity"
									type="number"
									value={item.quantity ? item.quantity : "1"}
									onChange={(e) => handleQuantity(e, item)}
								/>
								<button onClick={() => handleDelete(item)}>
									Delete
								</button>
							</div>
						))}
					</section>
				) : (
					<p className="cart-message">The cart is Empty</p>
				)}
				{cart.length > 0 && (
					<p className="cart-message">
						Total Price: {totPrice.toFixed(2)}$
					</p>
				)}{" "}
			</div>
		</section>
	)
}

export default Cart
