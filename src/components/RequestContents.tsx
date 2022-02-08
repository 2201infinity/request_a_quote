import React, { ReactElement } from "react";
import { CardContainer } from "./CardContainer";
import FilterBox from "./FilterBox";

function RequestContents(): ReactElement {
  return (
    <>
      <FilterBox />
      <CardContainer />
    </>
  );
}

export default RequestContents;
