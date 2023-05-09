import AdminProducts from "./AdminProducts"
import AdminUsers from "./AdminUsers"
import DeleteProducts from "./DeleteProducts"
import "./admin.css"
// import { NavLink } from "react-router-dom"

const Admin = () => (
	<>
		<AdminProducts />
		<DeleteProducts />
		<AdminUsers />
	</>
)

export default Admin
