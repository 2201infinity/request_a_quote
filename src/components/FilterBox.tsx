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

  return (
    <div>
      <span>가공방식: </span>
      {methods.map((method) => (
        <div>
          <input
            type="checkbox"
            name={method}
            onChange={onChange}
            checked={selectedFilters.includes(method)}
          />
          <label>{method}</label>
        </div>
      ))}

      <br />

      <span>재료: </span>
      {meterials.map((material) => (
        <div>
          <input
            type="checkbox"
            name={material}
            onChange={onChange}
            checked={selectedFilters.includes(material)}
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
