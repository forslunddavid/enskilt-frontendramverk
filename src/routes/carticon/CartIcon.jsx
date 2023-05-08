import cartIcon from "../../assets/ShoppingCartOutline.svg"
import { Link } from "react-router-dom"
import "./carticon.css"

const ShoppingCart = () => (
	<div>
		<Link to={`/cart`}>
			<img className="carticon" src={cartIcon} alt="Cart Logo" />
		</Link>
	</div>
)

export default ShoppingCart
