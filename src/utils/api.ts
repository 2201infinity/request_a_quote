import axios from "axios";
import { Request } from "types/request";
import { SERVER_URL } from "./constants";

export async function getRequests() {
  const response = await axios.get<Request>(`${SERVER_URL}/requests`);
  return response.data;
}
