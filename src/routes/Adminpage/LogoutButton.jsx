import { AuthContext } from "../authContext"
import { useContext } from "react"

const LogoutButton = () => {
	const { setLoggedIn, setUser } = useContext(AuthContext)

	const handleLogout = () => {
		setLoggedIn(false)
		setUser(null)
	}

	return <button onClick={handleLogout}>Logout</button>
}
export default LogoutButton
