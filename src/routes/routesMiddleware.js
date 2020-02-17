import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

const routesMiddleware = () => {
  const switchRoutes = (
    <>
      <Switch>
        {routes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              component={prop.component}
              exact={prop.exact}
              key={key}
            />
          );
        })}
      </Switch>
    </>
  );

  return <>{switchRoutes}</>;
};

export default routesMiddleware;
