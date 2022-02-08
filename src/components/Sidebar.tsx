import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { MobileLogo } from "assets/images";
import { MobileCompanyIcon } from "assets/images";

type SidebarProps = {
  onHandleSidebar: () => void;
  isMenuShowing: boolean;
};

function Sidebar({
  onHandleSidebar,
  isMenuShowing,
}: SidebarProps): ReactElement {
  return (
    <>
      <SidebarContainer visible={isMenuShowing}>
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
      <Background onClick={onHandleSidebar} visible={isMenuShowing} />
    </>
  );
}

export default Sidebar;

const SidebarContainer = styled.nav<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75vw;
  font-size: 14px;
  ${(props) =>
    props.visible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
  transition: all 0.5s;
  transform: translateX(${({ visible }) => (visible ? 0 : -50)}vw);
  z-index: 999;
  background: ${(props) => props.theme.colors.white};
  img {
    height: 15px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

const Background = styled.div<{ visible: boolean }>`
  ${(props) =>
    props.visible
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.black};
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.5;
`;
