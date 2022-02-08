import React, { ReactElement, useEffect, useState } from "react";

interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
  filters: string[];
}

const MockData = [
  {
    id: 1,
    title: "자동차 시제품 제작",
    client: "A 고객사",
    due: "2020.12.14",
    count: 2,
    amount: 100,
    method: ["밀링", "선반"],
    material: ["알루미늄"],
    status: "대기중",
  },
  {
    id: 2,
    title: "비행기 시제품 제작",
    client: "B 고객사",
    due: "2020.12.13",
    count: 2,
    amount: 100,
    method: ["선반"],
    material: ["탄소강", "강철"],
    status: "상담중",
  },
  {
    id: 3,
    title: "기차 시제품 제작",
    client: "C 고객사",
    due: "2020.12.12",
    count: 1,
    amount: 20,
    method: ["선반"],
    material: ["구리"],
    status: "대기중",
  },
  {
    id: 4,
    title: "자전거 시제품 제작",
    client: "D 고객사",
    due: "2020.12.11",
    count: 1,
    amount: 45,
    method: ["선반"],
    material: ["스테인리스강"],
    status: "대기중",
  },
  {
    id: 5,
    title: "헬리콥터 시제품 제작",
    client: "E 업체",
    due: "2020.12.10",
    count: 2,
    amount: 2,
    method: ["밀링"],
    material: ["알루미늄", "탄소강"],
    status: "대기중",
  },
  {
    id: 6,
    title: "전동 킥보드 시제품 제작",
    client: "F 업체",
    due: "2020.12.09",
    count: 1,
    amount: 20,
    method: ["밀링"],
    material: ["강철"],
    status: "대기중",
  },
];

function FilterBox(): ReactElement {
  const originalData = MockData.map((data) => ({
    ...data,
    filters: [...data.method, ...data.material],
  }));

  const [requestList, setRequestList] = useState<IRequest[]>(originalData);
  const [selectFilterMenu, setSelectFilterMenu] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const selectedFilterList = selectFilterMenu.includes(name)
      ? selectFilterMenu.filter((filter) => filter !== name)
      : [...selectFilterMenu, name];
    setSelectFilterMenu(selectedFilterList);

    setRequestList(
      originalData.filter((request) =>
        selectedFilterList.every((item) => request.filters.includes(item))
      )
    );
  };

  useEffect(() => {
    console.log("requestList", requestList);
  }, [requestList]);

  return (
    <div>
      <div>
        <input type="checkbox" value="밀링" name="밀링" onChange={onChange} />
        <label htmlFor="">밀링</label>
      </div>
      <div>
        <input type="checkbox" value="선반" name="선반" onChange={onChange} />
        <label htmlFor="">선반</label>
      </div>
      <br />

      <div>
        <input
          type="checkbox"
          value="알루미늄"
          name="알루미늄"
          onChange={onChange}
        />
        <label htmlFor="">알류미늄</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="탄소강"
          name="탄소강"
          onChange={onChange}
        />
        <label htmlFor="">탄소강</label>
      </div>
      <div>
        <input type="checkbox" value="구리" name="구리" onChange={onChange} />
        <label htmlFor="">구리</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="합금강"
          name="합금강"
          onChange={onChange}
        />
        <label htmlFor="">합금강</label>
      </div>
      <div>
        <input type="checkbox" value="강철" name="강철" onChange={onChange} />
        <label htmlFor="">강철</label>
      </div>
    </div>
  );
}

export default FilterBox;
