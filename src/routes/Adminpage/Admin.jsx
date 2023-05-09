import "./admin.css"
import { url, shopId } from "../../data/constants"

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
		picture: e.target.image.value,
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

function addUser(e) {
	e.preventDefault()

	const usersFormData = {
		username: e.target.username.value,
		password: e.target.password.value,
		shopid: shopId,
	}

	console.log(usersFormData)

	fetch(url + "?action=add-user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(usersFormData),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.success) {
				console.log("User added!")
			} else {
				console.log(data)
			}
		})
		.catch((err) => console.log(err))
}

const Admin = () => (
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
		<section className="add-users-section">
			{" "}
			<h1>Add New User</h1>
			<div className="add-users-container">
				<form className="add-users" onSubmit={addUser}>
					{" "}
					<input
						name="username"
						type="Text"
						placeholder="Username"
					></input>
					<input
						name="password"
						type="text"
						placeholder="password"
					></input>
					<button>Add User</button>
				</form>
			</div>
		</section>
	</>
)

export default Admin
