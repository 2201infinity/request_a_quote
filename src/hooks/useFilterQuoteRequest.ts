import { useState } from "react";
import { getRequests } from "utils/constants/api";
import useAsync from "./useAsync";

export default function useFilterQuoteRequest() {
  const [state, refetch] = useAsync(getRequests);
  const { data, loading, error } = state;

  const originalData = data?.map((request) => ({
    ...request,
    filters: [...request.method, ...request.material],
  }));

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [requestList, setRequestList] = useState(
    data?.map((request) => ({
      ...request,
      filters: [...request.method, ...request.material],
    }))
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!originalData) return;
    const { name } = e.target;
    const selectedFilterList = selectedFilters.includes(name)
      ? selectedFilters.filter((filter) => filter !== name)
      : [...selectedFilters, name];
    setSelectedFilters(selectedFilterList);

    setRequestList(
      originalData.filter((request) =>
        selectedFilterList.every((item) => request.filters.includes(item))
      )
    );
  };

  return {
    requestList,
    onChange,
  };
}
