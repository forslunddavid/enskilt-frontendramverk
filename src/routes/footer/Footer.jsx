import "./footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<div className="footer">
			<li className="contact">
				<ul>Address: 123 Main Street,</ul>
				<ul>Suite 456</ul>
				<ul>City: Anytown, USA</ul>
				<ul>Zip Code: 12345</ul>
				<ul>Phone Number: +1 (555) 123-4567 </ul>
				<ul>Email: info@example.com</ul>
			</li>
			<li className="footer-nav">
				<ul>
					<NavLink to="/Admin">Admin</NavLink>{" "}
				</ul>
				<ul>
					<NavLink to="/aboutUs">About Us</NavLink>
				</ul>
			</li>
		</div>
	)
}

export default Footer
