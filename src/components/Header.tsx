import React, { ReactElement } from "react";
import styled from "styled-components";

function Header(): ReactElement {
  return <HeaderContainer>Header</HeaderContainer>;
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  min-height: 70px;
  background-color: #1565c0;
`;

export default Header;
