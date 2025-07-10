const API_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "my_agenda";

// GET - traer todos los contactos de la agenda
export const getContacts = async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts`);
    if (!res.ok) throw new Error("Failed to fetch contacts");
    const data = await res.json();
    dispatch({ type: "get_contacts", payload: data.contacts }); //  solo la lista
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

// POST - crear un nuevo contacto
export const addContact = async (dispatch, contact) => {
  try {
    const contactData = {
      name: contact.name, 
      email: contact.email,
      phone: contact.phone,
      address: contact.address,
      agenda_slug: AGENDA_SLUG
    };

    const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    if (!res.ok) throw new Error("Failed to add contact");
    const newContact = await res.json();
    dispatch({ type: "add_contact", payload: newContact });
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};

// PUT - actualizar un contacto existente
export const updateContact = async (dispatch, id, updatedContact) => {
  try {
    const contactData = {
      name: updatedContact.name, // 👈 CAMBIO
      email: updatedContact.email,
      phone: updatedContact.phone,
      address: updatedContact.address,
      agenda_slug: AGENDA_SLUG
    };

    const res = await fetch(`${API_URL}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    if (!res.ok) throw new Error("Failed to update contact");
    const data = await res.json();
    dispatch({ type: "update_contact", payload: data });
  } catch (error) {
    console.error("Error updating contact:", error);
  }
};


// DELETE - borrar un contacto
export const deleteContact = async (dispatch, id) => {
  try {
    const res = await fetch(`${API_URL}/contacts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete contact");
    dispatch({ type: "delete_contact", payload: id });
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};
