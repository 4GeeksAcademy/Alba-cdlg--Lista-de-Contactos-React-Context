import {
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import useGlobalReducer from "../context/useGlobalReducer.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const contacts = store.contacts;
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch({ type: "delete_contact", payload: id });
  };

  const handleEdit = (contact) => {
    navigate("/contact-form", { state: { contact } });
  };

  return (
    <div className="text-center mt-5">
      <div className="card">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="card-body border-bottom d-flex align-items-center"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "20px",
                }}
              />
              <div className="flex-grow-1 text-start">
                <h5>{contact.name}</h5>
                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2" />
                  {contact.address}
                </p>
                <p className="mb-1">
                  <FaPhone className="me-2" />
                  {contact.phone}
                </p>
                <p className="mb-0">
                  <FaEnvelope className="me-2" />
                  {contact.email}
                </p>
              </div>
              <div className="ms-3">
                <FaEdit
                  className="me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(contact)}
                />
                <FaTrash
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(contact.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No contacts available. Please add a contact!</p>
        )}
      </div>
    </div>
  );
};
