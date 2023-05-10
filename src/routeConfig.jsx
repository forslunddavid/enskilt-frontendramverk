import { createHashRouter } from "react-router-dom"
import Root from "./routes/Root.jsx"
import Start from "./routes/start/Start.jsx"
import Products from "./routes/products/Products.jsx"
import Admin from "./routes/Adminpage/Admin.jsx"
import AdminProducts from "./routes/Adminpage/AdminProducts.jsx"
import AdminUsers from "./routes/Adminpage/AdminUsers.jsx"
import ErrorPage from "./routes/ErrorPage.jsx"
import ProductDetails from "./routes/products/ProductDetails.jsx"
import Cart from "./routes/cart/Cart.jsx"
import AboutUs from "./routes/about-us/AboutUs.jsx"
import LoginModal from "./routes/adminloginmodal/adminloginmodal.jsx"

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
				path: "adminlogin",
				element: <LoginModal />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "products/:id",
				element: <ProductDetails />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "aboutus",
				element: <AboutUs />,
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
		errorElement: <ErrorPage />,
	},
])

export { router }
