import styled from 'styled-components';

function NoMatchingResult() {
  return (
    <ResultWrapper>
      <NothingMatch>
        <Notice>조건에 맞는 견적 요청이 없습니다.</Notice>
      </NothingMatch>
    </ResultWrapper>
  );
}

export default NoMatchingResult;
const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NothingMatch = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Notice = styled.div``;
