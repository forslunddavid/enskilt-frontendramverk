import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
// import { AuthProvider } from "./authContext"
// import LoginModal from "./adminloginmodal/adminloginmodal"
// import { useState } from "react"

const Root = () => (
	<>
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
	</>
)

export default Root
