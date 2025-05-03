import { Link } from "react-router-dom";

const CardContact = ({ contact }) => {
  return (
    <div className="card">
      <img src={contact.image} alt={contact.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">{contact.email}</p>
        <p className="card-text">{contact.phone}</p>
        <p className="card-text">{contact.address}</p>
        <Link to={`/single/${contact.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CardContact;
