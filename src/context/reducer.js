import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"; // Import the reducer and the initial state.

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

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}
