import "./header.css"
import { NavLink } from "react-router-dom"
import ShoppingCart from "../carticon/CartIcon"
import Burger from "../burger/burger"

const Header = () => (
	<>
		<h1 className="shop-name">SummerFrenzy</h1>
		<div className="menu">
			<Burger className="burger-menu" />
			<header className="header">
				<nav className="nav">
					<NavLink className="menuitem" to="/">
						Home
					</NavLink>
					<NavLink className="menuitem" to="/products">
						Products
					</NavLink>
					<NavLink className="menuitem" to="/aboutUs">
						About Us
					</NavLink>
				</nav>
			</header>
			<ShoppingCart />
		</div>
	</>
)

export default Header
