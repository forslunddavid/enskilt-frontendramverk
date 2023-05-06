import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ productId }) => (
	<div className="card">
		<Link to={`/products/${productId}`}>
			<div className="product-picture"></div>
		</Link>
	</div>
)

export default Card
