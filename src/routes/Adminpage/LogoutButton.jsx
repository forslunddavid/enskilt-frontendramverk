import { AuthContext } from "../authContext"
import { useContext } from "react"

const LogoutButton = () => {
	// Getting setLoggedIn and setUser functions from the AuthContext using useContext hook
	const { setLoggedIn, setUser } = useContext(AuthContext)

	// Defining the function to handle logout event
	const handleLogout = () => {
		setLoggedIn(false) // setting the loggedIn state to false
		setUser(null) // setting the user state to null
	}

	// Rendering a button with a click event to handle logout
	return <button onClick={handleLogout}>Logout</button>
}
export default LogoutButton
