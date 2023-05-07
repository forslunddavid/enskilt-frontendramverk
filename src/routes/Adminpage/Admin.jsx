import "./admin.css"
const Admin = () => (
	<>
		<section className="add-products-section">
			<h1>Add New Products</h1>
			<div className="add-products-container">
				<form className="add-products">
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Description"></input>
					<input type="text" placeholder="Price"></input>
					<input type="text" placeholder="image"></input>
					<button>Add Product</button>
				</form>
			</div>
		</section>
		<section className="add-users-section">
			<h1>Add New User</h1>
			<div className="add-users-container">
				<form className="add-users">
					<input type="Text" placeholder="Username"></input>
					<input type="text" placeholder="password"></input>
					<button>Add User</button>
				</form>
			</div>
		</section>
	</>
)

export default Admin
