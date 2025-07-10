import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex">
        <div className="ms-auto">
          <Link to="/add" className="btn btn-primary">
            Añadir contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
