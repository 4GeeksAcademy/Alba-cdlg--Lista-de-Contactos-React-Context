import { Link } from "react-router-dom";
import useGlobalReducer from "../context/useGlobalReducer";
import { deleteContact } from "../context/actions";

const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    if (window.confirm(`¿Seguro que quieres eliminar a ${contact.name}?`)) {
      await deleteContact(dispatch, contact.id);
    }
  };

  return (
    <div className="card">
      {contact.image && (
        <img src={contact.image} alt={contact.name} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.email}</p>
        <p className="card-text">{contact.phone}</p>
        <p className="card-text">{contact.address}</p>

        <div className="d-flex justify-content-between">
          <Link to={`/edit/${contact.id}`} className="btn btn-secondary me-2">
            Editar
          </Link>
          <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
