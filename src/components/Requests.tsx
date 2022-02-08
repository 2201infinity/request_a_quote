import styled from "styled-components";
import useAsync from "hooks/useAsync";
import { getRequests } from "utils/constants/api";
import { Request } from "types/request";

function Requests() {
  const [state, refetch] = useAsync(getRequests);
  const { loading, data: requests, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>데이터를 불러올 수 없습니다</div>;
  return (
    <RequestList>
      {requests?.map((request: Request) => (
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
