import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { RootState } from "../store/store";

const useFetch = <InType, OutType extends {}>({
  onSuccess,
  onError,
  options,
}: {
  onSuccess: (data: AxiosResponse<OutType>) => void;
  onError?: (err: Error) => void;
  options?: any;
}) => {
  const token = useSelector((state: RootState) => state.user.token);
  const {
    mutate: res,
    error,
    isPending: isLoading,
  } = useMutation({
    mutationFn: (dataWithParams: InType) => {
      console.log(dataWithParams);

      return axios.request<OutType>({
        ...options,
        ...dataWithParams,
        headers: { token: `Bearer  ${token}` },
      });
    },
    onSuccess,
    onError:
      onError ??
      ((error) => {
        console.error("There was an error:", error);
      }),
  });

  return { res, isLoading, error };
};

export default useFetch;
