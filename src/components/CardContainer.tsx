import styled from 'styled-components';
import { Card } from './Card';
import media from 'styles/media';
import { RequestFilterTypes } from 'types/request';

type CardContainerProps = {
  requestList: RequestFilterTypes[];
};

export const CardContainer = ({ requestList }: CardContainerProps) => {
  return (
    <GridContainer>
      {requestList.map((data) => {
        const {
          id,
          title,
          client,
          due,
          count,
          amount,
          method,
          material,
          status,
        } = data;
        return (
          <Card
            key={id}
            title={title}
            client={client}
            due={due}
            count={count}
            amount={amount}
            method={method.join(', ')}
            material={material.join(', ')}
            status={status}
          />
        );
      })}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 16px;

  ${media.large} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.medium} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
