import "./footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => (
	<div className="footer">
		<NavLink to="/Admin">Admin</NavLink>
		<NavLink to="/AboutUs">About Us</NavLink>
	</div>
)

export default Footer
