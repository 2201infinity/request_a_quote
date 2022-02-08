import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement, useEffect } from "react";

function FilterBox(): ReactElement {
  const { requestList, onChange } = useFilterQuoteRequest();

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
