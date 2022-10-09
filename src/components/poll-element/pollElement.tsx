import { PollDataType } from "../../pages/Game/models/interfaces";

interface ElementProps {
  data: PollDataType;
}

export const PollElement = (props: ElementProps) => {
  const { data } = props;
  const [keyName, weight] = Object.entries(data).flat();
  return <div>{keyName}-{weight}</div>;
};
