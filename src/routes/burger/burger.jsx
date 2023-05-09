import { useState } from "react"
import burger from "../../assets/burger-menu-svgrepo-com.svg"
import cross from "../../assets/cross-svgrepo-com.svg"
import { Link } from "react-router-dom"
import "./burger.css"

const Burger = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<div>
			<div
				className={`burger ${showMenu ? "active" : ""}`}
				onClick={toggleMenu}
			>
				<img src={burger} alt="burger menu" />
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
