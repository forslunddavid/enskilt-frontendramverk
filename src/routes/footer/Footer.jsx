import "./footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => (
	<div className="footer">
		<NavLink to="/Admin">Admin</NavLink>
		<NavLink to="/AboutUs">About Us</NavLink>
		<p>
			Address: 123 Main Street, Suite 456 City: Anytown, USA Zip Code:
			12345 Phone Number: +1 (555) 123-4567 Email: info@example.com
		</p>
	</div>
)

export default Footer
