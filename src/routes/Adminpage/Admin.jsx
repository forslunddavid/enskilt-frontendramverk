import AdminProducts from "./AdminProducts"
import AdminUsers from "./AdminUsers"
import DeleteProducts from "./DeleteProducts"
import "./admin.css"
// import { NavLink } from "react-router-dom"
import { AuthContext } from "../authContext"
import { useContext } from "react"
import LogoutButton from "./LogoutButton"

const Admin = () => {
	const { loggedIn } = useContext(AuthContext)

	if (!loggedIn) return null
	return (
		<>
			<AdminProducts />
			<DeleteProducts />
			<AdminUsers />
			<LogoutButton />
		</>
	)
}

export default Admin
