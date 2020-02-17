import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const EachWorkout = styled.div`
  display: flex;
  align-items: center;
`;

const CompleteButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 4px solid #007ee5;
  background-color: ${props => (props.completed ? "#3182f6" : "")};
`;

const BlinkedButton = styled.button`
  position: fixed;
  bottom: 3rem;
  left: 0;
  height: 2.5rem;
  width: 100%;
  border: none;
  background-color: blue;
  animation: blinker 3s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 80%;
    }
  }
`;

const BlinkedText = styled.div`
  color: white;
  animation: blinker 3s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 40%;
    }
  }
`;

const TodayWorkouts = props => {
  return (
    <>
      <Title>오늘의 운동</Title>
      {props.todayWorkouts
        ? props.todayWorkouts.map((i, k) => (
            <EachWorkout onClick={() => props.toggleExecuted(k)} key={k}>
              <CompleteButton completed={i.executed} />
              <div>
                {i.workoutKor} - {i.partKor}
              </div>
            </EachWorkout>
          ))
        : null}
      <BlinkedButton onClick={() => props.clickForMovingToHistory()}>
        <BlinkedText>캘린더</BlinkedText>
      </BlinkedButton>
    </>
  );
};

export default TodayWorkouts;
