import { createContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false)
	const [user, setUser] = useState(null)

	return (
		<AuthContext.Provider value={{ loggedIn, user, setLoggedIn, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
