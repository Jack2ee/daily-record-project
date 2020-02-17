import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  background-color: #ffffff;
  height: 3rem;
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = props => {
  return (
    <HeaderArea>
      <div>daily-record</div>
    </HeaderArea>
  );
};

export default Header;
