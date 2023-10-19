import axios from "axios";
import { useCallback, useState } from "react";
import { FETCH_STATUS } from "./fetchStatus";

export enum Method {
  GET,
  POST,
  PUT,
}

function useAxios(url: string, method: Method) {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);
  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
  });

  const sendRequest = useCallback(async () => {
    try {
      setError(null);
      setStatus(FETCH_STATUS.LOADING);
      const response = await instance.request({
        url: url,
        method: method.toString(),
      });
      setStatus(FETCH_STATUS.SUCCESS);
      return response;
    } catch (err: any) {
      setError(err);
      setStatus(FETCH_STATUS.ERROR);
    }
  }, [url, method, instance]);

  return { sendRequest, status, error };
}

export default useAxios;
