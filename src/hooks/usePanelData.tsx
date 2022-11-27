import { useEffect, useState } from "react";
import { STATE } from "../pages/Panel/models/enums";

const usePanelData = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("authorization");

  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/api/panel", {
        method: "POST",
        headers: { authorization: `bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [token]);
  if (Object.keys(data).length > 0) return data;
  else return STATE.LOADING;
};

export default usePanelData;
