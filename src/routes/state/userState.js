import { atom } from "recoil"

const loggedInUserState = atom({
	key: "loggedInUser",
	default: false,
})
export default loggedInUserState
