import { updatedObject } from "./utility";

export const routeReducer = (state, action) => {
  const switchRoute = (state, action) => {
    return updatedObject(state, {
      currentPath: action.currentPath
    });
  };

  switch (action.type) {
    case "SET_INIT_ROUTE":
      return switchRoute(state, action);
    case "SWITCH_ROUTE":
      return switchRoute(state, action);
    default:
  }
};

export const authReducer = (state, action) => {
  const initAuth = (state, action) => {
    return updatedObject(state, {
      username: action.username,
      userId: 1
    });
  };

  switch (action.type) {
    case "INIT_AUTH":
      return initAuth(state, action);
    default:
  }
};

export const workoutReducer = (state, action) => {
  const initWorkout = (state, action) => {
    return updatedObject(state, {
      today: action.today,
      history: action.history
    });
  };

  const toggleComplete = (state, action) => {
    return updatedObject(state, {
      today: action.today
    });
  };

  switch (action.type) {
    case "INIT_WORKOUTS":
      return initWorkout(state, action);
    case "TOGGLE_COMPLETE":
      return toggleComplete(state, action);
    default:
  }
};

export const timerReducer = (state, action) => {
  const toggleMode = (state, action) => {
    return updatedObject(state, {
      mode: action.mode
    });
  };

  const startTimer = (state, action) => {
    return updatedObject(state, {
      start: true,
      pause: false,
      reset: false
    });
  };

  const increaseSeconds = (state, action) => {
    let updatedTimeState = state;
    if (updatedTimeState.seconds < 60) {
      updatedTimeState.seconds++;
    } else {
      updatedTimeState.minutes++;
      updatedTimeState.seconds = 0;
      if (updatedTimeState.minutes >= 60) {
        updatedTimeState.hours++;
        updatedTimeState.minutes = 0;
      }
    }
    return updatedObject(state, updatedTimeState);
  };

  const decreaseSeconds = (state, action) => {
    let updatedTimeState = state;
    if (updatedTimeState.seconds > 0) {
      updatedTimeState.seconds--;
    } else {
      updatedTimeState.minutes--;
      updatedTimeState.seconds = 59;
      if (updatedTimeState.minutes <= 0) {
        updatedTimeState.hours--;
        updatedTimeState.minutes = 0;
      }
    }
    return updatedObject(state, updatedTimeState);
  };

  const pauseTimer = (state, action) => {
    return updatedObject(state, {
      start: false,
      pause: true,
      reset: false
    });
  };

  const resetTimer = (state, action) => {
    return updatedObject(state, {
      start: false,
      pause: false,
      reset: true,
      seconds: 0,
      minutes: 0,
      hours: 0
    });
  };

  switch (action.type) {
    case "TOGGLE_MODE":
      return toggleMode(state, action);
    case "START_TIMER":
      return startTimer(state, action);
    case "INCREASE_SECONDS":
      return increaseSeconds(state, action);
    case "DECREASE_SECONDS":
      return decreaseSeconds(state, action);
    case "PAUSE_TIMER":
      return pauseTimer(state, action);
    case "RESET_TIMER":
      return resetTimer(state, action);
    default:
  }
};
