import styled from "styled-components";
import { Card } from "./Card";
import Breakpoints from "styles/breakpoints";
import media from "styles/media";
import { RequestFilterTypes } from "types/request";

interface CardContainerProps {
  requestList: RequestFilterTypes[];
}

export const CardContainer = ({ requestList }: CardContainerProps) => {
  return (
    <GridContainer>
      {requestList.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  gap: 16px;

  ${media.large} {
    width: ${Breakpoints.medium}px;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.medium} {
    width: ${Breakpoints.small}px;
    grid-template-columns: repeat(1, 1fr);
  }

  ${media.small} {
    width: 320px;
  }
`;
