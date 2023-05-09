import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { AuthProvider } from "./authContext"

const Root = () => {
	return (
		<>
			<AuthProvider>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</AuthProvider>
		</>
	)
}
export default Root
