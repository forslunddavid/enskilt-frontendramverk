import { useRecoilState } from "recoil"
import loggedInUserState from "../state/userState"
import AdminProducts from "./AdminProducts"
import AdminUsers from "./AdminUsers"
import DeleteProducts from "./DeleteProducts"
import Adminloginmodal from "../adminloginmodal/adminloginmodal.jsx"
import "./admin.css"
import LogoutButton from "./LogoutButton"

const Admin = () => {
	const [loggedInUser] = useRecoilState(loggedInUserState)

	return (
		<>
			<Adminloginmodal />
			{loggedInUser ? (
				<>
					<AdminProducts />
					<DeleteProducts />
					<AdminUsers />
					<LogoutButton />
				</>
			) : null}
		</>
	)
}

export default Admin
