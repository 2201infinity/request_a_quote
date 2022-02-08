import Header from "components/Header";
import RequestContents from "components/RequestContents";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";

function MainPage(): ReactElement {
  return (
    <>
      <Header />
      <MainContainer>
        <MainLayout>
          <RequestContents />
        </MainLayout>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.main`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  flex: 1 0 auto;

  ${media.large} {
    width: ${Breakpoints.medium}px;
  }

  ${media.medium} {
    width: ${Breakpoints.small}px;
    padding: 20px;
  }
`;

export default MainPage;
