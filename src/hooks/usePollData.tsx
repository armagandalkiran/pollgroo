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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:5000/game/${id}?offset=1&limit=1`
      );
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
    getData();
  }, [id]);

  return data;
};

export default usePollData;
