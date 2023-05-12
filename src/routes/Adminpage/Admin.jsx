import { useRecoilState } from "recoil"
import loggedInUserState from "../state/userState"
import AdminProducts from "./AdminProducts"
import AdminUsers from "./AdminUsers"
import DeleteProducts from "./DeleteProducts"
import Adminloginmodal from "../adminloginmodal/adminloginmodal.jsx"
import "./admin.css"
import LogoutButton from "./LogoutButton"
import { useEffect } from "react"

const Admin = () => {
	const [loggedInUser] = useRecoilState(loggedInUserState)

	useEffect(() => {
		console.log(loggedInUser, "loggedinuser")
	}, [loggedInUser])

	return (
		<>
			{loggedInUser ? (
				<>
					<AdminProducts />
					<DeleteProducts />
					{/* <AdminUsers /> */}
					<LogoutButton />
				</>
			) : (
				<Adminloginmodal />
			)}
		</>
	)
}

export default Admin
