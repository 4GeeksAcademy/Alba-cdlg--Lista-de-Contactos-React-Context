import { Link } from "react-router-dom";
import useGlobalReducer from "../context/useGlobalReducer";
import { deleteContact } from "../context/actions";
import { useState } from "react";

const ContactCard = ({ contact }) => {
  console.log("📦 Renderizando ContactCard para:", contact.name);
  const { dispatch } = useGlobalReducer();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    console.log("✅ Borrando contacto con ID:", contact.id);
    await deleteContact(dispatch, contact.id);
    setShowModal(false);
  };

  // Usa la imagen del contacto o un placeholder si no hay
  const profileImage =
  contact.image ||
  "https://randomuser.me/api/portraits/lego/1.jpg"; // placeholder LEGO


  return (
    <>
      <div
        className="card my-3 shadow"
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="d-flex align-items-center">
          <img
            src={profileImage}
            alt={contact.name}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "1rem",
            }}
          />
          <div className="flex-grow-1">
            <h5>{contact.name}</h5>
            <p className="mb-1">{contact.email}</p>
            <p className="mb-1">{contact.phone}</p>
            <p className="mb-0">{contact.address}</p>
          </div>
          <div>
            <Link
              to={`/edit/${contact.id}`}
              style={{
                backgroundColor: "#6c757d",
                color: "#fff",
                padding: "6px 12px",
                border: "none",
                borderRadius: "4px",
                marginRight: "8px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Editar
            </Link>
            <div
              onClick={() => {
                console.log("🔥 CLICK detectado en div");
                setShowModal(true);
              }}
              style={{
                backgroundColor: "#ff0000",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Eliminar
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "1.5rem",
              maxWidth: "400px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <h5 style={{ marginBottom: "1rem" }}>
              ¿Eliminar a <strong>{contact.name}</strong>?
            </h5>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#6c757d",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard;
