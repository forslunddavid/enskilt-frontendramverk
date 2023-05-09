import { url, shopId } from "../../data/constants"
import "./admin.css"

function addUser(e) {
	e.preventDefault()
	// prettier-ignore

	const usersFormData = {
		username: e.target.username.value,
		password: e.target.password.value,
		shopid:shopId,
	}

	console.log(usersFormData)

	fetch(url + "?action=add-user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(usersFormData),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.success) {
				console.log("User added!")
			} else {
				console.log(data)
			}
		})
		.catch((err) => console.log(err))
}

const AdminUsers = () => (
	<>
		<section className="add-users-section">
			{" "}
			<h1>Add New User</h1>
			<div className="add-users-container">
				<form className="add-users" onSubmit={addUser}>
					{" "}
					<input
						name="username"
						type="Text"
						placeholder="Username"
					></input>
					<input
						name="password"
						type="text"
						placeholder="password"
					></input>
					<button>Add User</button>
				</form>
			</div>
		</section>
	</>
)

export default AdminUsers
