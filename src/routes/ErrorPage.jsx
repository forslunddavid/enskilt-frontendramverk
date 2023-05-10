import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	let error = useRouteError()

	console.error(error)
	return (
		<div className="error">
			<h1>404 Error</h1>
			<h3>Page doesn&apos;t exist</h3>
		</div>
	)
}

export default ErrorPage
