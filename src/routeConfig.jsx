import { createHashRouter } from "react-router-dom"
import Root from "./routes/Root.jsx"
import Start from "./routes/Start.jsx"
import Products from "./routes/products/Products.jsx"
import Admin from "./routes/Adminpage/Admin.jsx"
import AdminProducts from "./routes/AdminProducts.jsx"
import AdminUsers from "./routes/AdminUsers.jsx"
import ErrorPage from "./routes/ErrorPage.jsx"
import ProductDetails from "./routes/ProductDetails.jsx"
import Cart from "./routes/Cart.jsx"
import AboutUs from "./routes/AboutUs.jsx"
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
				children: [
					{
          path: ":id",
          element: <ProductDetails />,
          render: ({ match }) => {
            const productID = match.params.id;
            const setProductState = useSetRecoilState(productState);

            useEffect(() => {
              async function getProduct() {
                const response = await fetch(`/products/${productID}`);
                const product = await response.json();
                setProductState(product);
              }
              getProduct();
            }, [productID]);

            return <ProductDetails />
				],
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

		// Används om URL inte matchar någon tidigare
		errorElement: <ErrorPage />,
	},
])

export { router }
