export interface IQuotation {
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string | string[];
  material: string | string[];
  status: string;
}
