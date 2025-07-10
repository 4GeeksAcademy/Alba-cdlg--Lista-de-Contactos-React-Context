import { useState, useEffect } from "react";
import useGlobalReducer from "../context/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { addContact, updateContact } from "../context/actions";

const ContactForm = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      const contactToEdit = store.contacts.find(
        (contact) => contact.id === parseInt(id)
      );
      if (contactToEdit) {
        setFormData({
          name: contactToEdit.name,
          email: contactToEdit.email,
          phone: contactToEdit.phone,
          address: contactToEdit.address,
        });
      }
    }
  }, [id, isEditMode, store.contacts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateContact(dispatch, id, formData);
    } else {
      await addContact(dispatch, formData);
    }
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>{isEditMode ? "Editar contacto" : "Agregar nuevo contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <p>Nombre completo</p>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Introduce el nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Correo electrónico</p>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Introduce el correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Teléfono</p>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Introduce el teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Dirección</p>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Introduce la dirección"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isEditMode ? "Actualizar" : "Guardar"}
        </button>
      </form>

      <div className="mt-3">
        <Link to="/" className="btn btn-link">
          o volver a la lista de contactos
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
