import styled from "styled-components";
import useAsync from "hooks/useAsync";
import { getRequests } from "utils/constants/api";
import { Request, State } from "types/request";

function Requests() {
  const [state, refetch] = useAsync(getRequests, []);
  // 요청서 데이터는 아래 requests에 있습니다.
  const { loading, data: requests, error } = state as State;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>데이러를 불러올 수 없습니다</div>;
  return (
    <RequestList>
      {requests &&
        requests.map((request: Request) => (
          <RequestItem key={request.id}>
            {request.title} ({request.client})
          </RequestItem>
        ))}
    </RequestList>
  );
}

export default Requests;

const RequestList = styled.div``;
const RequestItem = styled.div``;
