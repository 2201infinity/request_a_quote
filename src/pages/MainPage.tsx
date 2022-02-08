import { CardContainer } from "components/CardContainer";
import FilterBox from "components/FilterBox";
import Header from "components/Header";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";

function MainPage(): ReactElement {
  return (
    <MainContainer>
      <Header />
      <MainLayout>
        {/* 이쪽 부분에 헤더 아래에 들어갈 컴포넌트 넣으면 됌 */}
        <FilterBox />
        <CardContainer />
      </MainLayout>
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

  // @Note Media 쿼리 사용법입니다! 아래 내용도 확인 후 지워주세요~!
  // @Note size가 large가 됐으면 아래 css
  ${media.large} {
    width: ${Breakpoints.medium}px;
  }

  // @Note size가 midium 됐으면 아래 css
  ${media.medium} {
    width: ${Breakpoints.small}px;
  }
`;

export default MainPage;
