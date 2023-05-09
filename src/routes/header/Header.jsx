import "./header.css"
import { NavLink } from "react-router-dom"
import ShoppingCart from "../carticon/CartIcon"
import Burger from "../burger/burger"

const Header = () => (
	<>
		<h1 className="shop-name">SummerFrenzy</h1>
		<div className="menu">
			<Burger className="burger-menu" />
			<header>
				<nav className="nav">
					<NavLink className="menuitem" to="/">
						Home
					</NavLink>
					<NavLink className="menuitem" to="/Products">
						Products
					</NavLink>
					<NavLink className="menuitem" to="/AboutUs">
						About Us
					</NavLink>
				</nav>
			</header>
			<ShoppingCart />
		</div>
	</>
)

export default Header
