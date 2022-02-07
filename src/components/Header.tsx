import React, { ReactElement } from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import company from "assets/company.png";
import menu from "assets/menu.png";
import media from "styles/media";

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <Hamburger src={menu} alt="menu-button" />
      <Logo src={logo} alt="logo" />
      <ProfileBox>
        <img src={company} alt="company" />
        <NameText>A 가공 업체</NameText>
        <div>
          <p>로그아웃</p>
        </div>
      </ProfileBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  padding: 0 40px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.header};

  ${media.large} {
    height: 57px;
  }

  ${media.medium} {
    justify-content: flex-start;
    height: 44px;
  }
`;

const Hamburger = styled.img`
  display: none;
  height: 12px;
  margin-right: 19px;

  ${media.medium} {
    display: block;
  }
`;

const Logo = styled.img`
  height: 20px;

  ${media.medium} {
    height: 12px;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  img {
    height: 15px;
    margin-right: 8px;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.text}px;
  }

  div {
    padding-left: 32px;
    margin-left: 32px;
    border-left: 1px solid #ffffff;
  }

  ${media.medium} {
    display: none;
  }
`;

const NameText = styled.p`
  font-weight: 500;
`;

export default Header;
