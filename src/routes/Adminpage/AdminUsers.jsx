import { url, shopId } from "../../data/constants"
import "./admin.css"
import { useState, useEffect } from "react"
import { isValidUserName, isValidPassword } from "../validation/validation"

// function to add a new user when the form is submitted
function addUser(e, username, password, usernameError, passwordError) {
	e.preventDefault()

	if (usernameError || passwordError) {
		return
	}

	const usersFormData = {
		username,
		password,
		shopid: shopId,
	}
	console.log(usersFormData)

	// make a POST request to the server to add the user
	fetch(url + "?action=add-user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(usersFormData),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.success) {
				console.log("User added!")
			} else {
				console.log(data)
			}
		})
		.catch((err) => console.log(err))
}

const AdminUsers = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [usernameError, setUsernameError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [usernameTouched, setUsernameTouched] = useState(false)
	const [passwordTouched, setPasswordTouched] = useState(false)

	useEffect(() => {
		if (usernameTouched) {
			const [isValid, errorMessage] = isValidUserName(username)
			setUsernameError(isValid ? "" : errorMessage)
		}
	}, [username, usernameTouched])

	useEffect(() => {
		if (passwordTouched) {
			const [isValid, errorMessage] = isValidPassword(password)
			setPasswordError(isValid ? "" : errorMessage)
		}
	}, [password, passwordTouched])

	return (
		<>
			<section className="add-users-section">
				<h1>Add New User</h1>
				<div className="add-users-container">
					<form
						className="add-users"
						onSubmit={(e) =>
							addUser(
								e,
								username,
								password,
								usernameError,
								passwordError
							)
						}
					>
						<input
							name="username"
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onBlur={() => setUsernameTouched(true)}
						/>
						<p
							className={`error-message-container ${
								usernameError ? "error-message" : "hidden"
							}`}
						>
							{usernameError}
						</p>

						<input
							name="password"
							type="text"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={() => setPasswordTouched(true)}
						/>
						<p
							className={`error-message-container ${
								passwordError ? "error-message" : "hidden"
							}`}
						>
							{passwordError}
						</p>

						<button>Add User</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default AdminUsers
