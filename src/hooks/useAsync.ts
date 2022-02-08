import { useReducer, useEffect } from "react";
import { State, Action } from "types/request";

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

function useAsync(callback: any, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
