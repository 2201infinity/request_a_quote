import axios from "axios";
import { Request } from "types/request";

export async function getRequests() {
  const response = await axios.get<Request>(
    "https://requestquote.herokuapp.com/requests"
  );
  return response.data;
}
