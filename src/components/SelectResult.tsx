import { useState } from "react";
import styled from "styled-components";
import { ToggleButton } from "./common/ToggleButton";

function SelectResult() {
  const [isChecked, setIsChecked] = useState(false);
  const onToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <ResultWrapper>
      <ToggleWrapper>
        <ToggleButton onToggle={onToggle} checked={isChecked} />
        {/* carcontainer prop로 checked 상태 보내서 필터_수정필*/}
        <AfterToggle>상담 중인 요청만 보기</AfterToggle>
      </ToggleWrapper>
      <NothingMatch>
        <Notice>조건에 맞는 견적 요청이 없습니다.</Notice>
      </NothingMatch>
    </ResultWrapper>
  );
}

export default SelectResult;
const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
`;
const AfterToggle = styled.div``;
const NothingMatch = styled.div`
  width: 1130px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Notice = styled.div``;
