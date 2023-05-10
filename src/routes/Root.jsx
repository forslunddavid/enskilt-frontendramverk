import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { AuthProvider } from "./authContext"
import LoginModal from "./adminloginmodal/adminloginmodal"
import { useState } from "react"

const Root = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<AuthProvider>
			<Header />
			{showModal && <LoginModal />}
			<main>
				<Outlet />
			</main>
			<Footer />
		</AuthProvider>
	)
}
export default Root
