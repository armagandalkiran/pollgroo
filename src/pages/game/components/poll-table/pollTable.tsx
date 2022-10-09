import usePollData from "../../../../hooks/usePollData";
import { PollElement } from "../poll-element";
import { useParams } from "react-router-dom";
import { PollData, PollDataType } from "../../models/interfaces";

export const PollTable = () => {
  const { gameId } = useParams();
  const response = usePollData(gameId);
  const pollData: PollData | undefined = response.data;

  if (Object.keys(response).length && response.status !== 200) {
    throw new Response("Not Found", {
      status: response.status,
      statusText: response.errorMessage,
    });
  }

  return (
    <div>
      <div>{pollData?.subject}</div>
      <div>{pollData?.description}</div>
      {pollData?.type?.map((item: PollDataType, idx: number) => {
        return (
          <div key={idx}>
            <PollElement data={item} />
          </div>
        );
      })}
    </div>
  );
};
