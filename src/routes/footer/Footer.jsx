import "./footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<div className="footer">
			<div className="contact">
				<ul>
					<li>Address: 123 Main Street,</li>
					<li>Suite 456</li>
					<li>City: Anytown, USA</li>
					<li>Zip Code: 12345</li>
					<li>Phone Number: +1 (555) 123-4567 </li>
					<li>Email: info@example.com</li>
				</ul>
			</div>
			<div className="footer-links">
				<ul>
					<li>
						<NavLink to="/Admin">Admin</NavLink>{" "}
					</li>
					<li>
						<NavLink to="/aboutUs">About Us</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
