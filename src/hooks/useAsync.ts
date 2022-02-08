import { AxiosError } from "axios";
import { useReducer, useEffect, useCallback } from "react";
import { State, Action, UseAsyncReturnType } from "types/request";

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
      };
    default:
      throw new Error(`error action type: ${action}`);
  }
}

function useAsync(callback: Function): UseAsyncReturnType {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      const err = e as AxiosError;
      dispatch({ type: "ERROR", error: err });
    }
  }, [callback]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, fetchData];
}

export default useAsync;
