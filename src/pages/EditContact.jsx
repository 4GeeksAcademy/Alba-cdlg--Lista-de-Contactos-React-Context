import ContactForm from "../components/ContactForm";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h2>Editar contacto</h2>
      <ContactForm contactId={id} />
    </div>
  );
};

export default EditContact;
