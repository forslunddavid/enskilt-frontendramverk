import "./adminloginmodal.css"
import { url, shopId } from "../../data/constants"
// import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../authContext"

const LoginModal = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState({})

	const { setLoggedIn, setUser } = useContext(AuthContext)

	const handleLogin = async (e) => {
		e.preventDefault()

		const valid = validateForm()
		if (valid) {
			const response = await fetch(url + "?action=login-user" + shopId, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			})

			const data = await response.json()
			if (data.success) {
				setLoggedIn(true)
				setUser(data.user)
			} else {
				setErrors({ general: data.message })
			}
		}
	}

	const validateForm = () => {
		let valid = true
		const errors = {}

		if (!username) {
			errors.username = "Username or password is wrong"
			valid = false
		}

		if (!password || password.length < 4) {
			errors.password = "Username or password is wrong"
			valid = false
		}

		setErrors(errors)
		return valid
	}

	return (
		<section className="overlay hidden">
			<section className="modal">
				<h1>Log In</h1>
				<form onSubmit={handleLogin}>
					<div className="login-input-container">
						<legend className="login-guide-text">Username</legend>
						<input
							type="text"
							placeholder="Name"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="login-input-container">
						<legend className="login-guide-text">Password</legend>
						<input
							type="password"
							placeholder="Minimum 5 tecken"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span className="display-error">{errors.username}</span>
					</div>
					<button
						className="login-button"
						type="submit"
						disabled={Object.keys(errors).length > 0}
					>
						Logga in
					</button>
					<button to="/" className="cancel-button">
						Avbryt
					</button>
				</form>
			</section>
		</section>
	)
}

export default LoginModal
