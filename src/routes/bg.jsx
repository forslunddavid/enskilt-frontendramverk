import { useEffect } from "react"

function BodyClass({ children, className }) {
	useEffect(() => {
		document.body.className = className
		return () => {
			document.body.className = ""
		}
	}, [className])

	return children
}

export default BodyClass
