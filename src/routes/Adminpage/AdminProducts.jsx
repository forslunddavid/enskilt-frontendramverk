import { useState, useEffect } from "react"
import { url, shopId } from "../../data/constants"
import "./admin.css"
import {
	isValidProductName,
	isValidDescription,
	isValidPrice,
	isValidImage,
} from "../validation/validation"

const AdminProducts = () => {
	// Define state variables for form fields and error messages
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState("")
	const [picture, setPicture] = useState("")
	const [nameError, setNameError] = useState("")
	const [descriptionError, setDescriptionError] = useState("")
	const [priceError, setPriceError] = useState("")
	const [pictureError, setPictureError] = useState("")

	// Use useEffect to validate the fields whenever they change
	useEffect(() => {
		const [isValid, errorMessage] = isValidProductName(name)
		setNameError(isValid ? "" : errorMessage)
	}, [name])

	useEffect(() => {
		const [isValid, errorMessage] = isValidDescription(description)
		setDescriptionError(isValid ? "" : errorMessage)
	}, [description])

	useEffect(() => {
		const [isValid, errorMessage] = isValidPrice(price)
		setPriceError(isValid ? "" : errorMessage)
	}, [price])

	useEffect(() => {
		const [isValid, errorMessage] = isValidImage(picture)
		setPictureError(isValid ? "" : errorMessage)
	}, [picture])

	// Function to handle form submission
	function addProduct(e) {
		e.preventDefault()

		// Check if there are any errors in the form fields
		if (nameError || descriptionError || priceError || pictureError) {
			return
		}

		// Create object with product data for API request
		const productsFormData = {
			name,
			price: Number(price),
			description,
			picture,
			action: "add-product",
			shopid: shopId,
		}

		// Make API request to add product
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

	return (
		<>
			<section className="add-products-section">
				<h1>Add New Products</h1>
				<div className="add-products-container">
					<form className="add-products" onSubmit={addProduct}>
						<label htmlFor="name">Name:</label>
						<input
							name="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{nameError && (
							<p className="error-message">{nameError}</p>
						)}

						<label htmlFor="description">Description:</label>
						<input
							name="description"
							type="text"
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						{descriptionError && (
							<p className="error-message">{descriptionError}</p>
						)}

						<label htmlFor="price">Price:</label>
						<input
							name="price"
							type="number"
							placeholder="Price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						{priceError && (
							<p className="error-message">{priceError}</p>
						)}

						<label htmlFor="picture">Image:</label>
						<input
							name="picture"
							type="text"
							placeholder="Image"
							value={picture}
							onChange={(e) => setPicture(e.target.value)}
						/>
						{pictureError && (
							<p className="error-message">{pictureError}</p>
						)}

						<button>Add Product</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default AdminProducts
