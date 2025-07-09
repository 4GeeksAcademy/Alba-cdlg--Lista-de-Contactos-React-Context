import { useEffect } from "react";
import useGlobalReducer from "../context/useGlobalReducer";
import { getContacts } from "../context/actions";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    // Traer los contactos de la API al montar la vista
    getContacts(dispatch);
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de contactos</h2>
      <div className="row">
        {store.contacts.length === 0 ? (
          <p>No hay contactos para mostrar.</p>
        ) : (
          store.contacts.map((contact) => (
            <div key={contact.id} className="col-md-4 mb-3">
              <ContactCard contact={contact} />
            </div>
          ))
        )}
      </div>
      <hr />
      <h2 className="mt-4">Añadir un nuevo contacto</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
