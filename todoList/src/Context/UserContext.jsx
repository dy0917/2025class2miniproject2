import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

const userReducer = (state, action) => {
  switch (
    action.type // switch statements are commonin reducers
  ) {
    case "logined":
      return action.payload;
    case "logout":
      return null;
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, null);

  const login = async (username, password) => {
    //axios call api
    const user = { name: "Kingsley" }; //get user object from API
    dispatch({ type: "logined", payload: user });
  };

  const logout = async () => {
    const user = {}; //get user object from API
    dispatch({ type: "logout" });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
