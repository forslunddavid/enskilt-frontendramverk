import { url, shopId } from "../../data/constants"
import "./admin.css"
import {
	isValidProductName,
	isValidDescription,
	isValidPrice,
	isValidImage,
} from "../validation/validation"

function addProduct(e) {
	console.log(e.target)
	if (e.target.name) {
		console.log(e.target.name.value)
	} else {
		console.log('No input with name "name" found!')
	}
	e.preventDefault()
	const productsFormData = {
		name: e.target.name.value,
		price: Number(e.target.price.value),
		description: e.target.description.value,
		picture: e.target.picture.value,
		action: "add-product",
		shopid: shopId,
	}
	console.log(productsFormData)

	fetch(url + "?action=add-product", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(productsFormData),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.success) {
				console.log("Product added!")
			} else {
				console.log(data)
			}
		})
		.catch((err) => console.log(err))
}

const AdminProducts = () => (
	<>
		<section className="add-products-section">
			<h1>Add New Products</h1>
			<div className="add-products-container">
				<form className="add-products" onSubmit={addProduct}>
					<input name="name" type="text" placeholder="Name" />
					<input
						name="description"
						type="text"
						placeholder="description"
					></input>
					<input name="price" type="text" placeholder="Price"></input>
					<input
						name="picture"
						type="text"
						placeholder="image"
					></input>
					<button>Add Product</button>
				</form>
			</div>
		</section>
	</>
)

export default AdminProducts
