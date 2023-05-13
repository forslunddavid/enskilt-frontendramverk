import { url, shopId } from "./constants.js"

async function getUsers() {
	console.log("Getting users...")
	const response = await fetch(url + "?action=get-users&shopid=" + shopId)
	const data = await response.json()
	console.log("Response from API:", data)
}
getUsers()
