import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  const setUser = async ({ email, token }) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify({ email, token }));
      dispatch({
        type: "SET_USER",
        payload: { email, token },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeUser = async () => {
    await AsyncStorage.removeItem("userData");
    dispatch({
      type: "REMOVE_USER",
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
        removeUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
