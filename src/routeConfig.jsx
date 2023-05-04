import { createHashRouter } from "react-router-dom"
import Root from "./routes/Root.jsx"
import Start from "./routes/Start.jsx"
import Products from "./routes/Products.jsx"
import Admin from "./routes/Admin.jsx"
import AdminProducts from "./routes/AdminProducts.jsx"
import AdminUsers from "./routes/AdminUsers.jsx"
import ErrorPage from "./routes/ErrorPage.jsx"
import ProductDetails from "./routes/ProductDetails.jsx"
import Cart from "./routes/Cart.jsx"

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,

		children: [
			{
				path: "",
				element: <Start />,
			},
			{
				path: "products",
				element: <Products />,
				children: [
					{
						path: "products/:id",
						element: <ProductDetails />,
					},
				],
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "admin",
				element: <Admin />,
				children: [
					{
						path: "admin/products",
						element: <AdminProducts />,
					},
					{
						path: "admin/users",
						element: <AdminUsers />,
					},
				],
			},
		],

		// Används om URL inte matchar någon tidigare
		errorElement: <ErrorPage />,
	},
])

export { router }
