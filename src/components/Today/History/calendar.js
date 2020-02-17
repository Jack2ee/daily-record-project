import React from "react";
import styled from "styled-components";

import ReactCalendar from "react-calendar";

const Calendar = styled(ReactCalendar)`
  width: 100%;
  border: none;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

  .react-calendar__navigation__label,
  .react-calendar__navigation__arrow {
    font-size: 1rem;
  }

  .react-calendar__month-view {
    height: 50%;
  }

  .react-calendar__month-view__days {
    height: 300px;
  }
`;

const WorkoutCalendar = props => {
  return (
    <Calendar
      calendarType="US"
      value={new Date()}
      showNeighboringMonth={false}
      onChange={value => {
        props.selectDate(value);
      }}
    />
  );
};

export default WorkoutCalendar;
