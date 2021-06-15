export default (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts].concat(action.payload.contact),
      };

    case "EDIT_CONTACT":
      const newcontacts = state.contacts.filter(
        (c) => c.id !== action.payload.id
      );
      const contact = {
        id: action.payload.id,
        firstName: action.payload.contact.firstName,
        lastName: action.payload.contact.lastName,
        email: action.payload.contact.email,
        phone: action.payload.contact.phone,
      };
      return {
        ...state,
        contacts: newcontacts.concat(contact),
      };
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "DELETE_CONTACT":
      const editedcontacts = state.contacts.filter(
        (c) => c.id !== action.payload.id
      );
      return {
        ...state,
        contacts: editedcontacts,
      };
    default:
      return {
        ...state,
      };
  }
};
