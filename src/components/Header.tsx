import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';
import { Logo } from 'assets/images';
import { CompanyIcon } from 'assets/images';
import { MenuIcon } from 'assets/images';
import media from 'styles/media';
import Sidebar from 'components/Sidebar';
import Breakpoints from 'styles/breakpoints';
import useWindowWidth from 'hooks/useWindowWidth';

interface HeaderProps {
  companyName?: string;
}

function Header({ companyName = 'A 가공 업체' }: HeaderProps): ReactElement {
  const [isMenuShowing, setMenuShowing] = useState<boolean>(false);
  const { innerWidth } = useWindowWidth();
  const isMobile = innerWidth < Breakpoints.medium;

  const onHandleSidebar = () => {
    setMenuShowing((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <Hamburger onClick={onHandleSidebar}>
          <img src={MenuIcon} alt="menu-button" />
        </Hamburger>
        <LogoIcon src={Logo} alt="logo" />
        <ProfileBox>
          <img src={CompanyIcon} alt="company" />
          <NameText>{companyName}</NameText>
          <div>
            <p>로그아웃</p>
          </div>
        </ProfileBox>
      </HeaderContainer>
      {isMobile && (
        <Sidebar
          onHandleSidebar={onHandleSidebar}
          isMenuShowing={isMenuShowing}
        />
      )}
    </>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Hamburger = styled.button`
  display: none;
  margin-right: 19px;
  padding: 0;
  cursor: pointer;
  img {
    height: 12px;
  }

  ${media.medium} {
    display: block;
  }
`;

const LogoIcon = styled.img`
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
