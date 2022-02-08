import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import FilterBox from "./FilterBox";
import RequestTitle from "./RequestTitle";

function RequestContents(): ReactElement | null {
  const { onChange, requestList, onReset, selectedFilters } =
    useFilterQuoteRequest();

  if (!requestList) return <div>sd</div>;

  return (
    <>
      <RequestTitle />
      <FilterBox
        onChange={onChange}
        onReset={onReset}
        selectedFilters={selectedFilters}
      />
      <CardContainer requestList={requestList} />
    </>
  );
}

export default RequestContents;
