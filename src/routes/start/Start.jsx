import "./start.css"
import heroImage from "../../assets/Family-Playing-on-Beach.jpg"

const Start = () => (
	<div>
		<div className="hero-image-container">
			<p className="hero-text">
				Welcome to Summer Frenzy, your go-to destination for all things
				summer fun! We&apos;re a family-owned business with a passion
				for providing the best toys and accessories to make your summer
				unforgettable.
			</p>
			<img className="hero-image" src={heroImage}></img>
		</div>
	</div>
)

export default Start
