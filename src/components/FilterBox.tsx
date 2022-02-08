import React, { ReactElement } from "react";

type FilterBoxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  selectedFilters: string[];
};

function FilterBox({
  onChange,
  onReset,
  selectedFilters,
}: FilterBoxProps): ReactElement {
  const methods = ["밀링", "선반"];
  const meterials = ["알루미늄", "탄소강", "구리", "합금강", "강철"];

  const isChecked = (item: string) => selectedFilters.includes(item);

  const checkedLength = (arr: string[]) => {
    let count = 0;
    arr.forEach((item) => {
      if (isChecked(item)) count++;
    });
    return count;
  };

  return (
    <div>
      <span>가공방식: {checkedLength(methods)}</span>
      {methods.map((method) => (
        <div>
          <input
            type="checkbox"
            name={method}
            onChange={onChange}
            checked={isChecked(method)}
          />
          <label>{method}</label>
        </div>
      ))}

      <br />

      <span>재료: {checkedLength(meterials)}</span>
      {meterials.map((material) => (
        <div>
          <input
            type="checkbox"
            name={material}
            onChange={onChange}
            checked={isChecked(material)}
          />
          <label htmlFor="">{material}</label>
        </div>
      ))}

      <div>
        <button onClick={onReset}>필터링 리셋</button>
      </div>
    </div>
  );
}

export default FilterBox;
