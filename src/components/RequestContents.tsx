import useFilterQuoteRequest from "hooks/useFilterQuoteRequest";
import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import FilterBox from "./FilterBox";

function RequestContents(): ReactElement {
  useFilterQuoteRequest();

  return (
    <>
      <FilterBox />
      <CardContainer />
      Quotation request.
    </>
  );
}

export default RequestContents;
