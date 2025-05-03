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

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}
