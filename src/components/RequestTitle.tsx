import React, { ReactElement } from "react";
import styled from "styled-components";

function RequestTitle(): ReactElement {
  return (
    <TitleContainer>
      <Title>들어온 요청</Title>
      <Description>파트너님에게 딱 맞는 요청서를 찾아보세요.</Description>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;

const Description = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

export default RequestTitle;
