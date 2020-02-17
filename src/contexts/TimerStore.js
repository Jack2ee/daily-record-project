import React, { useReducer, useEffect } from "react";

import { timerReducer } from "./reducers";

export const TimerContext = React.createContext();

const TimerStore = props => {
  const [state, dispatch] = useReducer(timerReducer, {
    // mode: "INCREMENTAL",
    mode: "DECREMENTAL",
    start: false,
    pause: false,
    reset: false,
    // hours: 0,
    // minutes: 0,
    hours: 3,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    if (state.start) {
      if (state.mode === "INCREMENTAL")
        setTimeout(() => dispatch({ type: "INCREASE_SECONDS" }), 1000);
      else if (state.mode === "DECREMENTAL")
        setTimeout(() => dispatch({ type: "DECREASE_SECONDS" }), 1000);
    }
    if (state.pause) dispatch({ type: "PAUSE_TIMER" });

    if (state.reset) dispatch({ type: "RESET_TIMER" });
  }, [
    state.mode,
    state.start,
    state.pause,
    state.reset,
    state.seconds,
    state.minutes,
    state.hours
  ]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerStore;
