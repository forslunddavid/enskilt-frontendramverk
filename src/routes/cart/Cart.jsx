import { useRecoilState } from "recoil"
import cartItems from "../state/cartItems.js"
// import { useParams } from "react-router-dom"
import { useState } from "react"

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
		<div>
			<div>
				{cart.map((item) => (
					<div key={item.id}>
						{/* <img src={item.picture} alt={item.name} /> */}
						<p>{item.name}</p>
						<p>{item.price}$</p>
						<input
							type="number"
							value={item.quantity ? item.quantity : "1"}
							onChange={(e) => handleQuantity(e, item)}
						/>
						<button onClick={() => handleDelete(item)}>
							Delete
						</button>
					</div>
				))}
			</div>
			<p>Total Price: {totPrice}$</p>
		</div>
	)
}

export default Cart
