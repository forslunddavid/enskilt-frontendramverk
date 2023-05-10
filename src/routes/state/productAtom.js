import { atom } from "recoil"

const productAtom = atom({
	key: "productState",
	default: [],
})

export default productAtom
