import { useEffect, useRef, useState } from "react";
import { RequestFilterTypes } from "types/request";
import { getRequests } from "utils/constants/api";
import useAsync from "./useAsync";

type ReturnTypes = {
  requestList?: RequestFilterTypes[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  selectedFilters: string[];
  onToggle: () => void;
  isChecked: boolean;
};

export default function useFilterQuoteRequest(): ReturnTypes {
  const [{ data }] = useAsync(getRequests);
  const originalData = useRef<RequestFilterTypes[]>();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [requestList, setRequestList] = useState<RequestFilterTypes[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!data) return;
    originalData.current = data.map((request) => ({
      ...request,
      filters: [...request.method, ...request.material],
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

  const onToggle = () => {
    if (!originalData.current) return;
    if (!isChecked) {
      setIsChecked(true);
      setRequestList(requestList.filter((item) => item.status === "상담중"));
      return;
    }
    setIsChecked(false);
    setRequestList(
      originalData.current.filter((request) =>
        selectedFilters.every((item: string) => request.filters.includes(item))
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
    onToggle,
    isChecked,
  };
}
