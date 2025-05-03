import { useState } from "react";
import useGlobalReducer from "../context/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

const ContactForm = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      ...formData,
      image: `https://randomuser.me/api/portraits/lego/${Math.floor(
        Math.random() * 10
      )}.jpg`,
    };

    dispatch({ type: "add_contact", payload: newContact });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <p>Full Name</p>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Email</p>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Phone</p>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <p>Address</p>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>

      <div className="mt-3">
        <Link to="/" className="btn btn-link">
          or get back to contacts
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
