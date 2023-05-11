import { useState } from "react"
import burger from "../../assets/burger-menu-svgrepo-com.svg"
import cross from "../../assets/cross-svgrepo-com.svg"
import { Link } from "react-router-dom"
import "./burger.css"

const Burger = () => {
	// State to manage whether or not to show the menu
	const [showMenu, setShowMenu] = useState(false)
	const [showCross, setShowCross] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
		setShowCross(showCross)
	}

	return (
		<div>
			<div
				className={`burger ${showMenu ? "active" : ""}`}
				onClick={toggleMenu}
			>
				<img className="burgericon" src={burger} alt="burger menu" />
				<img className="crossicon" src={cross} alt="close menu" />
			</div>
			{showMenu && (
				<div className={`burger-menu ${showMenu ? "active" : ""}`}>
					{
						<li>
							<ul>
								{" "}
								<Link to="/">Home</Link>
							</ul>
							<ul>
								{" "}
								<Link to="/products">Products</Link>
							</ul>
							<ul>
								{" "}
								<Link to="/about">About</Link>
							</ul>
						</li>
					}
				</div>
			)}
		</div>
	)
}
export default Burger
