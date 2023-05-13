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
	const [nameTouched, setNameTouched] = useState(false)
	const [descriptionTouched, setDescriptionTouched] = useState(false)
	const [priceTouched, setPriceTouched] = useState(false)
	const [pictureTouched, setPictureTouched] = useState(false)

	// Use useEffect to validate the fields whenever they change
	useEffect(() => {
		if (nameTouched) {
			const [isValid, errorMessage] = isValidProductName(name)
			setNameError(isValid ? "" : errorMessage)
		}
	}, [name, nameTouched])

	useEffect(() => {
		if (descriptionTouched) {
			const [isValid, errorMessage] = isValidDescription(description)
			setDescriptionError(isValid ? "" : errorMessage)
		}
	}, [description, descriptionTouched])

	useEffect(() => {
		if (priceTouched) {
			const [isValid, errorMessage] = isValidPrice(price)
			setPriceError(isValid ? "" : errorMessage)
		}
	}, [price, priceTouched])

	useEffect(() => {
		if (pictureTouched) {
			const [isValid, errorMessage] = isValidImage(picture)
			setPictureError(isValid ? "" : errorMessage)
		}
	}, [picture, pictureTouched])

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
						<input
							name="name"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							onBlur={() => setNameTouched(true)}
						/>
						<p
							className={`error-message-container ${
								nameError ? "error-message" : "hidden"
							}`}
						>
							{nameError}
						</p>
						<input
							name="description"
							type="text"
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							onBlur={() => setDescriptionTouched(true)}
						/>
						<p
							className={`error-message-container ${
								descriptionError ? "error-message" : "hidden"
							}`}
						>
							{descriptionError}
						</p>
						<input
							name="price"
							type="number"
							placeholder="Price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							onBlur={() => setPriceTouched(true)}
						/>
						<p
							className={`error-message-container ${
								priceError ? "error-message" : "hidden"
							}`}
						>
							{priceError}
						</p>
						<input
							name="picture"
							type="text"
							placeholder="Image"
							value={picture}
							onChange={(e) => setPicture(e.target.value)}
							onBlur={() => setPictureTouched(true)}
						/>
						<p
							className={`error-message-container ${
								pictureError ? "error-message" : "hidden"
							}`}
						>
							{pictureError}
						</p>
						<button>Add Product</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default AdminProducts
