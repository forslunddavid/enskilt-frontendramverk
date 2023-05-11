import { useRecoilState } from "recoil"
import loggedInUserState from "../state/userState"

const LogoutButton = () => {
	const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState)

	const handleLogout = () => {
		setLoggedInUser(null)
	}

	return (
		<button className="logout-button" onClick={handleLogout}>
			Logout
		</button>
	)
}
export default LogoutButton
