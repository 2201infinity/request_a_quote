import { AxiosError } from "axios";

export interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface RequestFilterTypes extends Request {
  filters: string[];
}

export interface State {
  loading: boolean;
  data?: Request[];
  error?: AxiosError;
}

export type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: Request[] }
  | { type: "ERROR"; error: AxiosError };

export type UseAsyncReturnType = [State, () => Promise<void>];
