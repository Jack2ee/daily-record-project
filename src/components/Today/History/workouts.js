import React from "react";

const Workout = props => {
  return (
    <>
      {props.selectedDate === props.today ? "오늘" : props.selectedDate}
      <div>
        {props.workouts.map((i, k) => (
          <p key={k}>{i.workoutKor}</p>
        ))}
      </div>
    </>
  );
};

export default Workout;
