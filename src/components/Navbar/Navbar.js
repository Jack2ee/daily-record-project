import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Tab from "./Tab";
import NavItems from "../../routes/routes";

import { RouteContext } from "../../contexts/RouteStore";

const NavbarArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  height: 3rem;
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const { state: routeState, dispatch } = useContext(RouteContext);

  const setRouteContext = (type, path) => {
    dispatch({
      type: type,
      currentPath: path
    });
  };

  useEffect(() => {
    if (!routeState.currentPath) {
      setRouteContext("SET_INIT_ROUTE", window.location.pathname);
    }
  }, [routeState.currentPath]);

  return (
    <NavbarArea>
      {NavItems.filter(item => item.inNavbar).map((item, key) => (
        <Tab
          key={key}
          path={item.path}
          name={item.name}
          icon={item.icon}
          clicked={() => setRouteContext("SWITCH_ROUTE", item.path)}
          navClick={routeState.currentPath === item.path}
        />
      ))}
    </NavbarArea>
  );
};

export default Navbar;
