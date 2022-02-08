import axios from "axios";

interface IRequest {
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

export async function getRequests() {
  const response = await axios.get<IRequest>("http://localhost:4000/requests");
  return response.data;
}
