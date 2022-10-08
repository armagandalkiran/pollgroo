import { useEffect, useState } from "react";

const usePollData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/game")
      .then((res) => res.json())
      .then(({ data }) => setData(data));
  }, []);

  if (data.length > 0) return data;
  else return "loading";
};

export default usePollData;
