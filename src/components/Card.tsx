import styled from "styled-components";
import { Button } from "./Button";
import media from "styles/media";
import { Request } from "types/request";

export const Card = ({ data }: { data: Request }) => {
  const { amount, client, count, due, material, method, status, title } = data;
  return (
    <Container>
      <Title>{title}</Title>
      <Span>{client}</Span>
      <Span>{due}까지 납기</Span>
      <Line></Line>
      <Span>
        도면 개수<Strong>{count}개</Strong>
      </Span>
      <Span>
        총 수량<Strong>{amount}개</Strong>
      </Span>
      <Span>
        가공 방식<Strong>{method.join(", ")}</Strong>
      </Span>
      <Span>
        재료<Strong>{material.join(", ")}</Strong>
      </Span>
      <ButtonGroup>
        <Button variant="primary" width="117px">
          요청 내역 보기
        </Button>
        <Button variant="secondary" width="76px">
          채팅하기
        </Button>
      </ButtonGroup>
      {status === "상담중" && <Badge>{status}</Badge>}
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary} inset;
  }
`;

const Title = styled.h4`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  button {
    padding: 0;
  }
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text}px;
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  &:first-of-type {
    margin-bottom: 24px;
  }
  &:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.dateText};
    margin: 0 0 16px 0;
  }
  &:last-of-type {
    margin-bottom: 32px;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
  width: 232px;
  ${media.medium} {
    width: 192px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 32px;
`;

const Badge = styled.div`
  position: absolute;
  top: 24px;
  right: 16px;
  border: 1px solid ${({ theme }) => theme.colors.buttonOrange};
  box-sizing: border-box;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.buttonOrange};
  font-size: 12px;
  padding: 2px 8px;
`;
