import { AxiosError } from "axios";

export type Request = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};

export type RequestFilterTypes = {
  filters: string[];
} & Request;

export type State = {
  loading: boolean;
  data?: Request[];
  error?: AxiosError;
};

export type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: Request[] }
  | { type: "ERROR"; error: AxiosError };

export type UseAsyncReturnType = [State, () => Promise<void>];
