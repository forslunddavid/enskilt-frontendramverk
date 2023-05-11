import { atom } from "recoil"

const loggedInUserState = atom({
	key: "loggedInUser",
	default: {},
})
export default loggedInUserState
