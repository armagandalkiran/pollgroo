import usePollData from "../../../../hooks/usePollData";
import { STATE } from "../../models/enums";
import { PollElement } from "../poll-element";
import { useParams } from "react-router-dom";
import { LOADING_MESSAGE } from "../../models/constants";
import { PollData, PollDataType } from "../../models/interfaces";

export const PollTable = () => {
  const { gameId } = useParams();
  const pollData: PollData = usePollData(gameId);

  if (pollData === STATE.LOADING) return <div>{LOADING_MESSAGE}</div>;
  else
    return (
      <div>
        <div>{pollData.subject}</div>
        <div>{pollData.description}</div>
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
