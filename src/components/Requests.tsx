import useAsync from "hooks/useAsync";
import { getRequests } from "utils/constants/api";
import { Request, State } from "types/request";

function Requests() {
  const [state, refetch] = useAsync(getRequests, []);
  const { loading, data: requests, error } = state as State;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>데이러를 불러올 수 없습니다</div>;
  if (!requests) return null;
  return (
    <ul>
      {requests.map((request: Request) => (
        <li key={request.id}>
          {request.title} ({request.client})
        </li>
      ))}
    </ul>
  );
}

export default Requests;
