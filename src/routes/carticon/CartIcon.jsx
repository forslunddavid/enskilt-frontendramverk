import cartIcon from "../../assets/ShoppingCartOutline.svg"
import { Link } from "react-router-dom"
import "./carticon.css"

const ShoppingCart = () => (
	<div className="carticon">
		<Link to={`/cart`}>
			<img src={cartIcon} alt="Cart Logo" />
		</Link>
	</div>
)

export default ShoppingCart
