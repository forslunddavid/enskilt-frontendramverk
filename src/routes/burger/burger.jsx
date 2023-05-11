import { useState } from "react"
import burger from "../../assets/burger-menu-svgrepo-com.svg"
import cross from "../../assets/cross-svgrepo-com.svg"
import { Link } from "react-router-dom"
import "./burger.css"

const Burger = () => {
	// State to manage whether or not to show the menu
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<section className="burger-menu-container">
			<div
				className={`burger ${showMenu ? "active" : ""}`}
				onClick={toggleMenu}
			>
				{!showMenu && (
					<img
						className="burgericon"
						src={burger}
						alt="burger menu"
					/>
				)}
				{showMenu && (
					<img className="crossicon" src={cross} alt="close menu" />
				)}
			</div>
			{showMenu && (
				<div className={`burger-menu ${showMenu ? "active" : ""}`}>
					<li>
						<ul>
							<Link to="/" onClick={() => setShowMenu(false)}>
								Home
							</Link>
						</ul>
						<ul>
							<Link
								to="/products"
								onClick={() => setShowMenu(false)}
							>
								Products
							</Link>
						</ul>
						<ul>
							<Link
								to="/aboutus"
								onClick={() => setShowMenu(false)}
							>
								About
							</Link>
						</ul>
					</li>
				</div>
			)}
		</section>
	)
}

export default Burger
