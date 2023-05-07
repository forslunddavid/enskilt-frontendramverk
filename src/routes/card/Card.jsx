import "./card.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Card = ({ product }) => {
	const { id, name, image } = product

	return (
		<div className="card">
			<Link to={`/products/${id}`}>
				<img src={image} alt={name} />
			</Link>
		</div>
	)
}

Card.propTypes = {
	product: PropTypes.object.isRequired,
}

Card.defaultProps = {
	product: {},
}

export default Card
