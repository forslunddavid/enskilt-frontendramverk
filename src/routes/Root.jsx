import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Root = () => {
	return (
		<>
			<body>
				<Header />
				<main>
					<Outlet />
				</main>
			</body>
			<Footer />
		</>
	)
}
export default Root
