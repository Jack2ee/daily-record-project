import React from "react";
import styled from "styled-components";

import Calendar from "./History/calendar";
import Workouts from "./History/workouts";

const BlinkedButton = styled.button`
  position: fixed;
  bottom: 3rem;
  left: 0;
  height: 2.5rem;
  width: 100%;
  border: none;
  background-color: blue;
  animation: blinker 2s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 80%;
    }
  }
`;

const BlinkedText = styled.div`
  color: white;
  animation: blinker 2s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 40%;
    }
  }
`;

const WorkoutHistory = props => {
  return (
    <>
      <Calendar selectDate={value => props.selectDateHandler(value)} />
      <Workouts
        selectedDate={props.date}
        today={props.convertDateFormat()}
        workouts={props.todayWorkouts}
      />
      <BlinkedButton onClick={() => props.clickForMovingToToday()}>
        <BlinkedText>오늘운동</BlinkedText>
      </BlinkedButton>
    </>
  );
};

export default WorkoutHistory;
