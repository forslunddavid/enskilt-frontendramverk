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
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState("")
	const [picture, setPicture] = useState("")
	const [nameError, setNameError] = useState("")
	const [descriptionError, setDescriptionError] = useState("")
	const [priceError, setPriceError] = useState("")
	const [pictureError, setPictureError] = useState("")

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

	function addProduct(e) {
		e.preventDefault()

		if (nameError || descriptionError || priceError || pictureError) {
			return
		}

		const productsFormData = {
			name,
			price: Number(price),
			description,
			picture,
			action: "add-product",
			shopid: shopId,
		}

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
						/>
						{nameError && (
							<p className="error-message">{nameError}</p>
						)}
						<input
							name="description"
							type="text"
							placeholder="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						{descriptionError && (
							<p className="error-message">{descriptionError}</p>
						)}
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
						<input
							name="picture"
							type="text"
							placeholder="image"
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
