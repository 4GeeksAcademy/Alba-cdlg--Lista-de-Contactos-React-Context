import { useContext, useReducer, createContext } from "react";

export const initialStore = () => {
  return {
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_contact": {
      const newContact = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact],
      };
    }

    case "delete_contact": {
      const updateContacts = store.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...store,
        contacts: updateContacts,
      };
    }
    case "get_contacts": {
      return {
        ...store,
        contacts: action.payload,
      };
    }

    case "update_contact": {
      const updatedContact = action.payload;
      const updatedContacts = store.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      return {
        ...store,
        contacts: updatedContacts,
      };
    }

    default:
      console.warn("Unknown action type:", action.type);
      return store;
  }
}
