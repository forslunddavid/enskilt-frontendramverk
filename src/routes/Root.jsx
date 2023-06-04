import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
// import bgImage from "../assets/backgroundimage.svg"

const Root = () => (
	<>
		<Header />
		<main>
			{/* <div
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundSize: "cover",
				}}
			></div> */}
			<Outlet />
		</main>
		<Footer />
	</>
)

export default Root
