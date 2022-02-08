import { useReducer, useEffect } from "react";
import { Request, State } from "types/request";

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: Request[] }
  | { type: "ERROR"; error: any }; //any 수정하기

function reducer(state: State, action: Action): State {
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
