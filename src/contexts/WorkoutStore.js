import React, { useReducer } from "react";

import { workoutReducer } from "./reducers";

export const WorkoutContext = React.createContext();

const WorkoutStore = props => {
  const [state, dispatch] = useReducer(workoutReducer, {
    today: null,
    history: null
  });

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutStore;
