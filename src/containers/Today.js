import React, { useState, useContext, useEffect } from "react";

import WorkoutToday from "../components/Today/WorkoutToday";
import WorkoutHistory from "../components/Today/WorkoutHistory";

import { WorkoutContext } from "../contexts/WorkoutStore";

const Today = () => {
  const { state: workoutState, dispatch } = useContext(WorkoutContext);

  const selectDateHandler = date => {
    const convertedDate = convertDateFormatHandler(date);
    setDate(convertedDate);
  };

  const convertDateFormatHandler = value => {
    const date = new Date(value);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }

    return year + "-" + month + "-" + day;
  };

  const toggleExecutedHandLer = k => {
    let changedComplete = workoutState.today;
    changedComplete[k].executed = !changedComplete[k].executed;
    dispatch({
      type: "TOGGLE_COMPLETE",
      today: changedComplete
    });
  };

  const [date, setDate] = useState(convertDateFormatHandler(new Date()));
  const [shownPage, setShownPage] = useState("today");

  useEffect(() => {
    if (!workoutState.today) {
      dispatch({
        type: "INIT_WORKOUTS",
        today: [
          {
            partEng: "biceps",
            partKor: "이두(팔)",
            workoutEng: "Barbell Curl",
            workoutKor: "바벨 컬",
            executed: false
          },
          {
            partEng: "biceps",
            partKor: "이두(팔)",
            workoutEng: "Dumbbell Curl",
            workoutKor: "덤벨 컬",
            executed: false
          },
          {
            partEng: "biceps",
            partKor: "이두(팔)",
            workoutEng: "Hammer Curl",
            workoutKor: "해머 컬",
            executed: false
          },
          {
            partEng: "biceps",
            partKor: "이두(팔)",
            workoutEng: "Barbell Curl",
            workoutKor: "바벨 컬",
            executed: false
          }
        ]
      });
      console.log("execute");
    }
  }, [workoutState.today, dispatch]);

  return (
    <>
      {shownPage === "today" ? (
        <WorkoutToday
          todayWorkouts={workoutState.today}
          clickForMovingToHistory={() => setShownPage("history")}
          toggleExecuted={index => toggleExecutedHandLer(index)}
        />
      ) : (
        <WorkoutHistory
          clickForMovingToToday={() => setShownPage("today")}
          convertDateFormat={() => convertDateFormatHandler(new Date())}
          selectDateHandler={value => selectDateHandler(value)}
          date={date}
          todayWorkouts={workoutState.today}
        />
      )}
    </>
  );
};

export default Today;
