import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex">				
				<div className="ms-auto">
					<Link to="/contact">
						<button className="btn btn-success text-white">Add a new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};