import useFetch from "./main";
import { useRouter } from "next/navigation";

export interface SignUpDataType {
  username: string;
  email: string;
  password: string;
}

const useSignUp = () => {
  const router = useRouter();
  const { res, error, isLoading } = useFetch<any, SignUpDataType>({
    options: { url: "/user", method: "POST" },
    onSuccess: () => {
      router.push("/signin");
    },
  });
  return { signUp: res, isLoading, error };
};

export default useSignUp;
