import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import axios from "axios";
import list from "../assets/List.js";
export default (props) => {
  const intialState = {
    email: "",
    token: null,
    contacts: list,
  };

  const [state, dispatch] = useReducer(appReducer, intialState);

  const addUser = (contact) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        contact,
      },
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: {
        id,
      },
    });
  };

  const editUser = (contact, id) => {
    dispatch({
      type: "EDIT_CONTACT",
      payload: {
        id,
        contact,
      },
    });
  };

  const setUser = ({ email, token }) => {
    dispatch({
      type: "SET_USER",
      payload: { email, token },
    });
  };
  const { email, token, contacts } = state;
  return (
    <AppContext.Provider
      value={{
        email: email,
        token: token,
        contacts,
        addUser,
        deleteUser,
        editUser,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
