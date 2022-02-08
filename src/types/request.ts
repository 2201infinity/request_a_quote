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

export type State = {
  loading: boolean;
  data?: Request[];
  error?: string;
};
