import React, { useReducer } from "react";

import { routeReducer } from "./reducers";

export const RouteContext = React.createContext();

const RouteStore = props => {
  const [state, dispatch] = useReducer(routeReducer, {
    currentPath: null
  });

  return (
    <RouteContext.Provider value={{ state, dispatch }}>
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteStore;
