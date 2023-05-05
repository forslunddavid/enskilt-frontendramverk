import "./header.css"
import { NavLink } from "react-router-dom"

const Header = () => (
	<header>
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/Products">Products</NavLink>
			<NavLink to="/AboutUs">About Us</NavLink>
		</nav>
	</header>
)

export default Header
