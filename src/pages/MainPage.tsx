import Header from "components/Header";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";

function MainPage(): ReactElement {
  return (
    <MainContainer>
      <Header />
      <MainLayout>main</MainLayout>
    </MainContainer>
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
  background-color: #e5fbff; // @Note layout 확인하셨으면 지워주세요~!

  // @Note Media 쿼리 사용법입니다! 아래 내용도 확인 후 지워주세요~!
  // @Note size가 large가 됐으면 아래 css
  ${media.large} {
    background-color: yellow;
    width: ${Breakpoints.medium}px;
  }

  // @Note size가 midium 됐으면 아래 css
  ${media.medium} {
    background-color: blue;
    width: ${Breakpoints.small}px;
  }

  // @Note 아래는 직접 px을 커스텀 할 수 있음
  ${media.custom(350)} {
    background-color: green;
    width: 350px;
  }
`;

export default MainPage;
