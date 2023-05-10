import { atom } from "recoil"

export const cartItems = atom({
	key: "cartItems",
	default: [],
})

export default cartItems
