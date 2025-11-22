import { useCallback, useState } from "react";
import api from "./axiosClient"; // ✅ call directly from axios client, not just login

type HttpMethod = "get" | "post" | "put" | "delete";

export const useApi = <T = any>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const request = useCallback(
    async (
      method: HttpMethod,
      url: string,
      payload?: any,
      params?: any
    ): Promise<void> => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await api({
          method,
          url,
          data: payload,
          params,
        });

        setData(response.data);
      } catch (err: any) {
        console.error("API Error:", err.response?.data || err.message);
        setError(err.response?.data?.message || err.message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, data, request };
};
