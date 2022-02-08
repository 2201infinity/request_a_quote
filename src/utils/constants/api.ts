import axios from "axios";
import { Request } from "types/request";

export async function getRequests() {
  const response = await axios.get<Request>("http://localhost:4000/requests");
  return response.data;
}
