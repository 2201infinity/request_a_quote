import styled from 'styled-components';
import { Card } from './Card';
import Breakpoints from 'styles/breakpoints';
import media from 'styles/media';

const DATAS = [
  {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  },
  {
    id: 2,
    title: '비행기 시제품 제작',
    client: 'B 고객사',
    due: '2020.12.13',
    count: 2,
    amount: 100,
    method: ['선반'],
    material: ['탄소강', '강철'],
    status: '상담중',
  },
  {
    id: 3,
    title: '기차 시제품 제작',
    client: 'C 고객사',
    due: '2020.12.12',
    count: 1,
    amount: 20,
    method: ['선반'],
    material: ['구리'],
    status: '대기중',
  },
  {
    id: 4,
    title: '자전거 시제품 제작',
    client: 'D 고객사',
    due: '2020.12.11',
    count: 1,
    amount: 45,
    method: ['선반'],
    material: ['스테인리스강'],
    status: '대기중',
  },
  {
    id: 5,
    title: '헬리콥터 시제품 제작',
    client: 'E 업체',
    due: '2020.12.10',
    count: 2,
    amount: 2,
    method: ['밀링'],
    material: ['알루미늄', '탄소강'],
    status: '대기중',
  },
  {
    id: 6,
    title: '전동 킥보드 시제품 제작',
    client: 'F 업체',
    due: '2020.12.09',
    count: 1,
    amount: 20,
    method: ['밀링'],
    material: ['강철'],
    status: '대기중',
  },
];

export const CardContainer = () => {
  return (
    <GridContainer>
      {DATAS.map((data) => {
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
