import React, { useReducer } from "react";

import { authReducer } from "./reducers";

export const AuthContext = React.createContext();

const AuthStore = props => {
  const [state, dispatch] = useReducer(authReducer, {
    username: "재키"
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthStore;
