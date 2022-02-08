import {
  ArrowDropDown24Icon,
  Refresh24Icon,
  SelectedArrowDropDown24Icon,
} from "assets";
import useOutSideClick from "hooks/useOutSideClick";
import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import media from "styles/media";
import { REQUEST_MATERIALS, REQUEST_METHODS } from "utils/constants";

interface FilterBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  selectedFilters: string[];
}

function FilterBox({
  onChange,
  onReset,
  selectedFilters,
}: FilterBoxProps): ReactElement {
  const [isOpenFilterMenu, setIsOpenFilterMenu] = useState<string | null>(null);

  const isChecked = (item: string) => selectedFilters.includes(item);
  const checkedLength = (arr: string[]) => {
    let count = 0;
    arr.forEach((item) => {
      if (isChecked(item)) count++;
    });
    return count > 0 ? `(${count})` : null;
  };

  const onOpenFilterMenu = (filter: string | null) =>
    setIsOpenFilterMenu(filter);
  const onCloseFilterMenu = () => setIsOpenFilterMenu(null);

  const isCheckedMenu = (item: "methods" | "materials") =>
    isOpenFilterMenu === item;

  const { targetEl } = useOutSideClick(
    isOpenFilterMenu !== null,
    onCloseFilterMenu
  );

  return (
    <FilterBoxContainer>
      <BoxStyled
        ref={targetEl}
        onClick={(e) => {
          e.stopPropagation();
          onOpenFilterMenu(isCheckedMenu("methods") ? null : "methods");
        }}
        isActive={isCheckedMenu("methods")}
      >
        <LabelText>
          가공방식
          {checkedLength(REQUEST_METHODS)}
        </LabelText>

        {isCheckedMenu("methods") ? (
          <SelectedArrowDropDownIcon />
        ) : (
          <ArrowDropDownIcon />
        )}

        {isCheckedMenu("methods") && (
          <FilterMenuBox onClick={(e) => e.stopPropagation()}>
            {REQUEST_METHODS.map((method) => (
              <MenuItem key={method}>
                <CheckBoxStyled
                  type="checkbox"
                  name={method}
                  onChange={onChange}
                  checked={isChecked(method)}
                />
                <CheckBoxLabel>{method}</CheckBoxLabel>
              </MenuItem>
            ))}
          </FilterMenuBox>
        )}
      </BoxStyled>
      <BoxStyled
        ref={targetEl}
        isActive={isCheckedMenu("materials")}
        onClick={(e) => {
          e.stopPropagation();
          onOpenFilterMenu(isCheckedMenu("materials") ? null : "materials");
        }}
      >
        <LabelText>
          재료
          {checkedLength(REQUEST_MATERIALS)}
        </LabelText>

        {isCheckedMenu("materials") ? (
          <SelectedArrowDropDownIcon />
        ) : (
          <ArrowDropDownIcon />
        )}

        {isCheckedMenu("materials") && (
          <FilterMenuBox onClick={(e) => e.stopPropagation()}>
            {REQUEST_MATERIALS.map((material) => (
              <MenuItem key={material}>
                <CheckBoxStyled
                  type="checkbox"
                  name={material}
                  onChange={onChange}
                  checked={isChecked(material)}
                />
                <CheckBoxLabel>{material}</CheckBoxLabel>
              </MenuItem>
            ))}
          </FilterMenuBox>
        )}
      </BoxStyled>

      {selectedFilters.length > 0 && (
        <ResetButton onClick={onReset}>
          <Refresh24Icon /> 필터링 리셋
        </ResetButton>
      )}
    </FilterBoxContainer>
  );
}

const FilterBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
  ${media.medium} {
    margin-bottom: 20px;
  }
`;

const LabelText = styled.span`
  height: 14px;
`;

const BoxStyled = styled.div<{ isActive: boolean }>`
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.dateText};
  border-radius: 4px;
  padding: 9px 41px 9px 12px;
  display: flex;
  ${(props) =>
    props.isActive
      ? css`
          background: ${({ theme }) => theme.colors.header};
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.grayText};
        `}
  align-items: center;
  position: relative;
  margin-right: 24px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.smallText}px;
  &:first-child {
    margin-right: 4px;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const DropDownIconStyled = css`
  position: absolute;
  top: 50%;
  right: 19px;
  transform: translateY(-50%);
`;

const ArrowDropDownIcon = styled(ArrowDropDown24Icon)`
  ${DropDownIconStyled}
`;

const SelectedArrowDropDownIcon = styled(SelectedArrowDropDown24Icon)`
  ${DropDownIconStyled}
`;

const ResetButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;

const FilterMenuBox = styled.div`
  width: 130px;
  position: absolute;
  top: 36px;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grayText};
  font-weight: 500;
  z-index: 9999;
  border: 1px solid ${({ theme }) => theme.colors.dateText};
  padding: 17px 12px;
  border-radius: 4px;
  cursor: default;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxStyled = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.text}px;
`;

export default FilterBox;
