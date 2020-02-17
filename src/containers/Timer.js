import React, { useContext } from "react";

import { TimerContext } from "../contexts/TimerStore";

const Timer = () => {
  const { state: timerState, dispatch } = useContext(TimerContext);

  const toggleModeHandler = () => {
    dispatch({
      type: "TOGGLE_MODE",
      mode: timerState.mode === "INCREMENTAL" ? "DECREMENTAL" : "INCREMENTAL"
    });
  };

  const toggleBetweenStartAndPauseHandler = () => {
    if (!timerState.start) dispatch({ type: "START_TIMER" });
    else dispatch({ type: "PAUSE_TIMER" });
  };

  const resetTimerHandler = () => {
    dispatch({
      type: "RESET_TIMER"
    });
  };

  return (
    <>
      {timerState.hours}h:{timerState.minutes}m:{timerState.seconds}s
      <button onClick={() => toggleModeHandler()}>{timerState.mode}</button>
      <button onClick={() => toggleBetweenStartAndPauseHandler()}>
        {!timerState.start ? "Start" : "Pause"}
      </button>
      <button onClick={() => resetTimerHandler()}>Reset</button>
    </>
  );
};

export default Timer;
