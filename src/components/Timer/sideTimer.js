import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TimerContext } from "../../contexts/TimerStore";
import { RouteContext } from "../../contexts/RouteStore";

const TinyTimer = styled(Link)`
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 0;
  width: 100px;
  height: 30px;
  background-color: black;
  color: #ffffff;
`;

const SideTimer = () => {
  const { state: timerState, dispatch: timerDispatch } = useContext(
    TimerContext
  );
  const { dispatch: routeDispatch } = useContext(RouteContext);
  let tinyTimer = null;
  if (timerState.start || timerState.pause) {
    tinyTimer = (
      <TinyTimer
        to="/timer"
        onClick={() =>
          routeDispatch({ type: "SWITCH_ROUTE", currentPath: "/timer" })
        }
      >
        {timerState.hours} - {timerState.minutes} - {timerState.seconds}
      </TinyTimer>
    );
  }
  return <>{tinyTimer}</>;
};

export default SideTimer;
