import usePollData from "../../hooks/usePollData";

const PollTable = () => {
  const pollData = usePollData();
  console.log(pollData);
  return <div>pollTable</div>;
};

export default PollTable;
