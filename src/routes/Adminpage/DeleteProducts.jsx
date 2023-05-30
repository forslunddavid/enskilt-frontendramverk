import { useEffect } from "react"
import { useRecoilState } from "recoil"
import productAtom from "../state/productAtom"
import { url, shopId } from "../../data/constants"
import "./admin.css"

const DeleteProducts = () => {
	const [products, setProducts] = useRecoilState(productAtom)
	useEffect(() => {
		async function getProducts() {
			const response = await fetch(
				url + "?action=get-products&shopid=" + shopId
			)
			const data = await response.json()
			setProducts(data)
		}
		getProducts()
	}, [])

	// Define function to handle delete button click
	const handleDelete = async (productId) => {
		const deleteUrl =
			"https://forverkliga.se/JavaScript/api/fe/?action=delete-product/"

		const data = {
			shopid: shopId,
			productid: productId,
			action: "delete-product",
		}

		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}
		console.log(data)

		const response = await fetch(deleteUrl, options)
		const statusObject = await response.json()
		if (statusObject.status === "success") {
			console.log("success")
			setProducts(products.filter((product) => product.id !== productId))
			return true
		}
		console.log("Delete status failed: ", statusObject)
		return false
	}

	return (
		<>
			<ul>
				{products.map((product) => (
					<li className="card" key={product.id}>
						<img
							className="product-image"
							src={product.picture}
							alt={product.name}
						/>
						<p>{product.name}</p>
						<button onClick={() => handleDelete(product.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default DeleteProducts
