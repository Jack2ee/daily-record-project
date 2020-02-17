import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TabLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.touched === "false" ? "#3D4640" : "#1034A6")};
  font-size: 0.8rem;
  font-weight: bold;
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = props => {
  return (
    <TabLink
      to={props.path}
      onClick={props.clicked}
      touched={props.navClick.toString()}
    >
      <div>{props.name}</div>
    </TabLink>
  );
};

export default Tab;
