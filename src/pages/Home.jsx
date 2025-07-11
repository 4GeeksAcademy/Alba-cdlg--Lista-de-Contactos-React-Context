import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import useGlobalReducer from "../context/useGlobalReducer.jsx";
import { getContacts } from "../context/actions";
import ContactCard from "../components/ContactCard";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const contacts = store.contacts;
  const navigate = useNavigate();

  useEffect(() => {
    getContacts(dispatch); // 🔄 Cargar contactos desde la API al montar
  }, [dispatch]);

  return (
    <div className="text-center mt-5">
      <div className="card">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No hay contactos disponibles. ¡Por favor agrega un contacto!</p>
        )}
      </div>
    </div>
  );
};
