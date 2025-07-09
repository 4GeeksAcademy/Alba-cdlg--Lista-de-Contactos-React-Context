const API_URL = "https://playground.4geeks.com/apis/fake/contact/";

export const getContacts = async (dispatch) => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch contacts");
    const data = await res.json();
    dispatch({ type: "get_contacts", payload: data });
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

export const addContact = async (dispatch, contact) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    if (!res.ok) throw new Error("Failed to add contact");
    const newContact = await res.json();
    dispatch({ type: "add_contact", payload: newContact });
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};

export const updateContact = async (dispatch, id, updatedContact) => {
  try {
    const res = await fetch(`${API_URL}${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    });
    if (!res.ok) throw new Error("Failed to update contact");
    const data = await res.json();
    dispatch({ type: "update_contact", payload: data });
  } catch (error) {
    console.error("Error updating contact:", error);
  }
};

export const deleteContact = async (dispatch, id) => {
  try {
    const res = await fetch(`${API_URL}${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete contact");
    dispatch({ type: "delete_contact", payload: id });
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};
