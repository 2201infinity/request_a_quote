import { useEffect, useRef, useState } from "react";
import { RequestFilterTypes } from "types/request";
import { getRequests } from "utils/api";
import useAsync from "./useAsync";

interface ReturnTypes {
  requestList?: RequestFilterTypes[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  selectedFilters: string[];
}

export default function useFilterQuoteRequest(): ReturnTypes {
  const [{ data }] = useAsync(getRequests);
  const originalData = useRef<RequestFilterTypes[]>();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [requestList, setRequestList] = useState<RequestFilterTypes[]>([]);

  useEffect(() => {
    if (!data) return;
    originalData.current = data.map((request) => ({
      ...request,
      filters: [...request.method, ...request.material, request.status],
    }));

    setRequestList(originalData.current);
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!originalData.current) return;
    const { name } = e.target;
    const selectedFilterList = selectedFilters.includes(name)
      ? selectedFilters.filter((filter) => filter !== name)
      : [...selectedFilters, name];
    setSelectedFilters(selectedFilterList);

    setRequestList(
      originalData.current.filter((request) =>
        selectedFilterList.every((item) => request.filters.includes(item))
      )
    );
  };

  const onReset = () => {
    if (!originalData.current) return;
    setSelectedFilters([]);
    setRequestList(originalData.current);
  };

  return {
    requestList,
    onChange,
    onReset,
    selectedFilters,
  };
}
