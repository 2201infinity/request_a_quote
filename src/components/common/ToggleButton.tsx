import { useState } from 'react';
import styled from 'styled-components';

export const ToggleButton = ({ ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBox
      {...rest}
      type="checkbox"
      onChange={onToggle}
      checked={isChecked}
    />
  );
};

const CheckBox = styled.input`
  all: unset;
  width: 40px;
  height: 14px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  /* toggle off */
  background: #c2c2c2;
  ::after {
    content: '';
    z-index: 10;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background: #f5f5f5;
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }

  /* toggle on */
  &:checked {
    background-color: #bbdefb;
    ::after {
      content: '';
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      left: 20px;
      border-radius: 50%;
      background: #2196f3;
      transition: all 0.2s ease-in-out;
    }
  }
`;
