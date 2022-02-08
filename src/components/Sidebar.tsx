import React, { ReactElement } from "react";
import styled from "styled-components";
import { MobileLogo } from "assets/images";
import { MobileCompanyIcon } from "assets/images";

function Sidebar(): ReactElement {
  return (
    <SidebarContainer>
      <LogoBox>
        <img src={MobileLogo} alt="logo" />
      </LogoBox>
      <MenuBox>
        <li>
          <img src={MobileCompanyIcon} alt="company" /> 파트너정밀가공
        </li>
        <li>로그아웃</li>
      </MenuBox>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.nav`
  width: 50vw;
  height: 100vh;
  position: absolute;
  background: ${(props) => props.theme.colors.white};
  img {
    height: 15px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 44px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 6px;
  padding-left: 20px;
`;

const MenuBox = styled.ul`
  padding-left: 32px;

  li {
    margin: 24px 0;
  }

  li img {
    margin-right: 8px;
  }
`;
