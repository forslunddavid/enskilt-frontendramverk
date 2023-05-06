import "./header.css"
import { NavLink } from "react-router-dom"
import ShoppingCart from "../carticon/CartIcon"
import Search from "../searchicon/serchicon"

const Header = () => (
	<div className="menu">
		<Search />
		<header>
			<nav className="nav">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/Products">Products</NavLink>
				<NavLink to="/AboutUs">About Us</NavLink>
			</nav>
		</header>
		<ShoppingCart />
	</div>
)

export default Header
