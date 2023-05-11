import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import loggedInUserState from "../state/userState"
import { url, shopId } from "../../data/constants"
import "./adminloginmodal.css"

const LoginModal = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [valid, setValid] = useState(false)
	const [errors, setErrors] = useState({})
	const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState)

	const handleLogin = async (e) => {
		e.preventDefault()
		const valid = validateForm()
		if (valid) {
			const response = await fetch(
				url + "?action=login-user&shopid=" + shopId,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password }),
				}
			)
			console.log(response.status, "response status")
			const data = await response.json()
			console.log(data, "data")
			useEffect(() => {
				if (data.success) {
					console.log(loggedInUser, "logged in user1")
					setLoggedInUser(data.user)
					console.log(loggedInUser, "logged in user2")
				}
			}, [data.success])
		} else {
			setErrors({ general: "Invalid username/password" })
		}
	}

	const validateForm = () => {
		let valid = true
		const errors = {}
		if (!username) {
			errors.username = "Username required"
			valid = false
		}
		if (!password || password.length < 4) {
			errors.password = "Password must be at least 4 characters"
			valid = false
		}
		setValid(valid)
		return valid
	}

	return (
		<>
			<section className="overlay">
				<section className="modal">
					<h1>Log In</h1>
					<form onSubmit={handleLogin}>
						<div className="login-input-container">
							<legend className="login-guide-text">
								Username
							</legend>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="login-input-container">
							<legend className="login-guide-text">
								Password
							</legend>
							<input
								type="password"
								placeholder="Minimum 5 tecken"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span className="display-error">
								{errors.username}
							</span>
						</div>
						<button
							className="login-button"
							type="submit"
							onClick={() => {
								console.log("Button clicked!")
								handleLogin
							}}
						>
							Logga in
						</button>
					</form>
				</section>
			</section>
		</>
	)
}

export default LoginModal
