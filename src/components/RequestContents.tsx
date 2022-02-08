import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import FilterBox from "./FilterBox";

function RequestContents(): ReactElement | null {
  const { onChange, requestList } = useFilterQuoteRequest();

  if (!requestList) return <div>sd</div>;

  return (
    <>
      <FilterBox requestList={requestList} onChange={onChange} />
      <CardContainer requestList={requestList} />
    </>
  );
}

export default RequestContents;
