import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
// import BodyClass from "./bg"
import bgImage from "../assets/backgroundimage.svg"
// import { AuthProvider } from "./authContext"
// import LoginModal from "./adminloginmodal/adminloginmodal"
// import { useState } from "react"

const Root = () => (
	<>
		<Header />
		<main>
			<div
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundSize: "cover",
				}}
			></div>
			{/* <BodyClass
				className="bg-image"
				style={{ backgroundImage: "../assets/backgroundimage.svg" }}
			></BodyClass> */}
			<Outlet />
		</main>
		<Footer />
	</>
)

export default Root
