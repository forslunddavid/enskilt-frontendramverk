const url = "https://forverkliga.se/JavaScript/api/fe/"
const shopId = 1005

async function addProduct() {
	console.log("adding product")

	const data = {
		action: "add-product",
		name: "Beach umbrella",
		price: 39.99,
		description:
			"Large and sturdy beach umbrella for sun protection and relaxation.",
		picture:
			"https://beachbrella.com/wp-content/uploads/2014/10/Umbrella-Profile-Enhancement.jpg",
		shopid: shopId,
	}

	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	console.log("response: ", statusObject)
}

addProduct()
