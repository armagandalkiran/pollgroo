import { useEffect, useState } from "react";
import { PollData } from "../pages/Game/models/interfaces";

interface Error {
  [key: string]: string;
}

interface ResponseModelObject {
  status?: number;
  errorMessage?: string;
  error?: Error;
  message?: string;
  data?: PollData;
}

const usePollData = (id?: string) => {
  const [data, setData] = useState<ResponseModelObject>({});
  const token = localStorage.getItem("authorization");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:5000/api/games/${id}`, {
        headers: { authorization: `bearer ${token}` },
      });
      const responseResult = await response.json();
      if (response.status === 404) {
        setData({
          status: 404,
          errorMessage: "Not Found",
          error: responseResult,
        });
      } else if (!response || response.status !== 200) {
        setData({
          status: response.status,
          errorMessage: "Unknown Error",
          error: responseResult,
        });
      }

      if (response.status === 200) {
        setData({
          status: 200,
          message: "success",
          data: responseResult,
        });
      }
    };
    if (token) {
      getData();
    }
  }, [id, token]);

  return data;
};

export default usePollData;
