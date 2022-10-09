import { useEffect, useState } from "react";
import { STATE } from "../pages/Game/models/enums";

const usePollData = (id?: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/game/${id}?offset=1&limit=1`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  if (!Object.keys(data).length) return STATE.LOADING;
  else return data;
};

export default usePollData;
