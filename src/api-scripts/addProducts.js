import { url } from "./constants.js"
import { data } from "./data/products.js"

async function addProduct(product) {
	console.log("Adding product...", product)

	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(product),
	}

	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log("Response from API:", statusObject)
}

async function addAllTheProducts() {
	for (const product of data) {
		await addProduct(product)
	}
}

addAllTheProducts()
