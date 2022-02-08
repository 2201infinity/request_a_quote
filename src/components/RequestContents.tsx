import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import ToggleBox from "./ToggleBox";
import FilterBox from "./FilterBox";
import NoMatchingResult from "./NoMathcingResult";

function RequestContents(): ReactElement | null {
  const {
    onChange,
    requestList,
    onReset,
    selectedFilters,
    onToggle,
    isChecked,
  } = useFilterQuoteRequest();

  if (!requestList) return <NoMatchingResult />;

  return (
    <>
      <FilterBox
        onChange={onChange}
        onReset={onReset}
        selectedFilters={selectedFilters}
      />
      <ToggleBox onToggle={onToggle} checked={isChecked} />
      <CardContainer requestList={requestList} />
    </>
  );
}

export default RequestContents;
