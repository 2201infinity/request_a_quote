import { ArrowDropDown24Icon, Refresh24Icon } from "assets";
import useOutSideClick from "hooks/useOutSideClick";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import media from "styles/media";

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
  const methods = ["밀링", "선반"];
  const meterials = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
  const [isOpenFilterMenu, setIsOpenFilterMenu] = useState<string | null>(null);

  const isChecked = (item: string) => selectedFilters.includes(item);

  const checkedLength = (arr: string[]) => {
    let count = 0;
    arr.forEach((item) => {
      if (isChecked(item)) count++;
    });
    return count;
  };

  const onOpenFilterMenu = (filter: string) => setIsOpenFilterMenu(filter);
  const onCloseFilterMenu = () => setIsOpenFilterMenu(null);

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
          onOpenFilterMenu("methods");
        }}
      >
        <span>
          가공방식{checkedLength(methods) > 0 && `(${checkedLength(methods)})`}
        </span>
        <ArrowDropDownIcon />
        {isOpenFilterMenu === "methods" && (
          <FilterMenuBox>
            {methods.map((method) => (
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
        onClick={(e) => {
          e.stopPropagation();
          onOpenFilterMenu("meterials");
        }}
      >
        <span>
          재료{checkedLength(meterials) > 0 && `(${checkedLength(meterials)})`}
        </span>
        <ArrowDropDownIcon />
        {isOpenFilterMenu === "meterials" && (
          <FilterMenuBox>
            {meterials.map((material) => (
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

const BoxStyled = styled.div`
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.dateText};
  border-radius: 4px;
  padding: 9px 41px 9px 12px;
  display: flex;
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

const ArrowDropDownIcon = styled(ArrowDropDown24Icon)`
  position: absolute;
  top: 50%;
  right: 19px;
  transform: translateY(-50%);
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
  z-index: 9999;
  border: 1px solid ${({ theme }) => theme.colors.dateText};
  padding: 17px 12px;
  border-radius: 4px;
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
