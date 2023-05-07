const url = "https://forverkliga.se/JavaScript/api/fe/"
const shopId = 1005

async function addProduct() {
	console.log("adding product")

	const data = {
		action: "add-product",
		name: "Beach towel",
		price: 24.99,
		description:
			"Dry off in style with this colorful and absorbent beach towel. With a soft and comfortable texture, it's perfect for lounging on the sand or drying off after a refreshing swim in the ocean.",
		picture:
			"https://www.thespruce.com/thmb/EbO6FNFnQonomzyYOGrH0t0sINM=/5100x3400/filters:fill(auto,1)/striped-beach-towel-on-sand-with-hat-and-glasses-463236755-5a1f20d5b39d030039f78644.jpg",
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
