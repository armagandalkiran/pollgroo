import { useEffect, useState } from "react";
import { STATE } from "../pages/Panel/models/enums";

const usePanelData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/panel")
      .then((res) => res.json())
      .then(({ data }) => setData(data));
  }, []);

  if (data.length > 0) return data;
  else return STATE.LOADING;
};

export default usePanelData;
