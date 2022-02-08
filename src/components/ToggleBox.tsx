import styled from "styled-components";
import { Toggle } from "./common/Toggle";

interface IProp {
  onToggle: React.ChangeEventHandler;
  checked: boolean;
}
function ToggleBox({ onToggle, checked }: IProp) {
  return (
    <ToggleWrapper>
      <Toggle onToggle={onToggle} checked={checked} />
      <AfterToggle>상담 중인 요청만 보기</AfterToggle>
    </ToggleWrapper>
  );
}

export default ToggleBox;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
`;
const AfterToggle = styled.div``;
