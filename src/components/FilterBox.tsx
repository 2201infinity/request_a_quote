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
  return (
    <div>
      <div>
        <input
          type="checkbox"
          value="밀링"
          name="밀링"
          onChange={onChange}
          checked={selectedFilters.includes("밀링")}
        />
        <label htmlFor="">밀링</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="선반"
          name="선반"
          onChange={onChange}
          checked={selectedFilters.includes("선반")}
        />
        <label htmlFor="">선반</label>
      </div>
      <br />

      <div>
        <input
          type="checkbox"
          value="알루미늄"
          name="알루미늄"
          onChange={onChange}
          checked={selectedFilters.includes("알루미늄")}
        />
        <label htmlFor="">알류미늄</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="탄소강"
          name="탄소강"
          onChange={onChange}
          checked={selectedFilters.includes("탄소강")}
        />
        <label htmlFor="">탄소강</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="구리"
          name="구리"
          onChange={onChange}
          checked={selectedFilters.includes("구리")}
        />
        <label htmlFor="">구리</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="합금강"
          name="합금강"
          onChange={onChange}
          checked={selectedFilters.includes("합금강")}
        />
        <label htmlFor="">합금강</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="강철"
          name="강철"
          onChange={onChange}
          checked={selectedFilters.includes("강철")}
        />
        <label htmlFor="">강철</label>
      </div>

      <div>
        <button onClick={onReset}>필터링 리셋</button>
      </div>
    </div>
  );
}

export default FilterBox;
