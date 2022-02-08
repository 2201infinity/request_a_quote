import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import ToggleBox from "./ToggleBox";
import FilterBox from "./FilterBox";
import RequestTitle from "./RequestTitle";
import NoMatchingResult from "./NoMathcingResult";
import styled from "styled-components";

function RequestContents(): ReactElement {
  const { onChange, requestList, onReset, selectedFilters } =
    useFilterQuoteRequest();

  return (
    <>
      <RequestTitle />
      <FilterBlock>
        <FilterBox
          onChange={onChange}
          onReset={onReset}
          selectedFilters={selectedFilters}
        />
        <ToggleBox
          onToggle={onChange}
          checked={selectedFilters.includes("상담중")}
        />
      </FilterBlock>
      {!requestList || requestList.length === 0 ? (
        <NoMatchingResult />
      ) : (
        <CardContainer requestList={requestList} />
      )}
    </>
  );
}

const FilterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default RequestContents;
