import React from "react";
import styled from "styled-components";

const Area = styled.div`
  padding-bottom: 3rem;
  height: ${document.documentElement.clientHeight}px;
  overflow: auto;
`;

const SafeArea = props => {
  return <Area>{props.children}</Area>;
};

export default SafeArea;
