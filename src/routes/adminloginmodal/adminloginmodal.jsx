import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import loggedInUserState from "../state/userState"
import { url, shopId } from "../../data/constants"
import { isValidUserName, isValidAddPassword } from "../validation/validation"
import "./adminloginmodal.css"

const LoginModal = () => {
	// Declare state variables
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [valid, setValid] = useState(false)
	const [errors, setErrors] = useState({})
	const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState)
	const [data, setData] = useState()
	const [usernameError, setUsernameError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [usernameTouched, setUsernameTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	// Validate username
	useEffect(() => {
		if (usernameTouched) {
			const [isValid, errorMessage] = isValidUserName(username)
			setUsernameError(isValid ? "" : errorMessage)
		}
	}, [username, usernameTouched])

	// Validate password
	useEffect(() => {
		if (passwordTouched) {
			const [isValid, errorMessage] = isValidAddPassword(password)
			setPasswordError(isValid ? "" : errorMessage)
		}
	}, [password, passwordTouched])
	// Check login response
	useEffect(() => {
		if (data) {
			console.log(data, "data")
			if (data.status === "success") {
				setLoggedInUser(true)
			} else {
				setErrors({ general: "Invalid username or password" })
			}
		}
	}, [data])

	// Handle login form submission
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
			if (response.status === 200) {
				setData(await response.json())
			} else {
				setValid(false)
				setErrors({ general: "Invalid username or password" })
			}
		}
	}

	// Validate login form
	function validateForm() {
		let valid = true
		const errors = {}
		if (!username) {
			errors.username = "Username required"
			valid = false
		}
		setErrors(errors)
		setValid(valid)
		return valid
	}

	return (
		<>
			<section className="login-section">
				{" "}
				<section className="modal">
					{" "}
					<h1>Log In</h1>{" "}
					<form onSubmit={handleLogin}>
						{" "}
						<div className="login-input-container">
							{" "}
							<legend className="login-guide-text">
								Username
							</legend>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) => setUsername(e.target.value)}
								onBlur={() => setUsernameTouched(true)}
							/>
							{usernameError && (
								<p className="error-message">{usernameError}</p>
							)}
						</div>{" "}
						<div className="login-input-container">
							{" "}
							<legend className="login-guide-text">
								Password
							</legend>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								onBlur={() => setPasswordTouched(true)}
							/>
							{passwordError && (
								<p className="error-message">{passwordError}</p>
							)}
							<span className="display-error">
								{errors.password}
							</span>{" "}
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
						</button>{" "}
					</form>{" "}
				</section>{" "}
			</section>
		</>
	)
}
export default LoginModal
