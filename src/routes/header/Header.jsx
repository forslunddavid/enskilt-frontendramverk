import "./header.css"
import { NavLink } from "react-router-dom"

const Header = () => (
	<div className="menu">
		<header>
			<nav className="nav">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/Products">Products</NavLink>
				<NavLink to="/AboutUs">About Us</NavLink>
			</nav>
		</header>
	</div>
)

export default Header
