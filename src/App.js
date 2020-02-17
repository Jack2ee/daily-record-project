import React from "react";

import SafeArea from "./util/SafeArea";
import Header from "./components/Navbar/Header";
import Navbar from "./components/Navbar/Navbar";
import RoutesMiddleware from "./routes/routesMiddleware";
import SideTimer from "./components/Timer/sideTimer";

import RouteStore from "./contexts/RouteStore";
import AuthStore from "./contexts/AuthStore";
import WorkoutStore from "./contexts/WorkoutStore";
import TimerStore from "./contexts/TimerStore";

const App = () => {
  return (
    <>
      <RouteStore>
        <AuthStore>
          <WorkoutStore>
            <TimerStore>
              <Header />
              <SafeArea>
                <RoutesMiddleware />
              </SafeArea>
              <SideTimer />
              <Navbar />
            </TimerStore>
          </WorkoutStore>
        </AuthStore>
      </RouteStore>
    </>
  );
};

export default App;
