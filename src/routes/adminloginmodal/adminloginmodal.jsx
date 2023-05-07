import "./adminloginmodal.css"
import { Link } from "react-router-dom"

const LoginModal = () => {
	return (
		<section className="overlay hidden">
			<section className="modal">
				<h1>Logga in</h1>
				<form className="login-form">
					<div className="login-input-container">
						<legend className="login-guide-text">
							Användarnamn{" "}
							<span className="material-symbols-outlined"></span>
						</legend>
						<input type="text" placeholder="Namn"></input>
						<span className="input-icon"></span>
						<span className="display-error"></span>
					</div>
					<div className="login-input-container">
						<legend className="login-guide-text">
							Lösenord{" "}
							<span className="material-symbols-outlined"></span>
						</legend>
						<input
							type="password"
							placeholder="Minst 4 tecken"
						></input>
						<span className="input-icon"></span>
						<span className="display-error"></span>
					</div>
					<Link to="/admin" className="login-button">
						Logga in
					</Link>
				</form>
			</section>
		</section>
	)
}

export default LoginModal
