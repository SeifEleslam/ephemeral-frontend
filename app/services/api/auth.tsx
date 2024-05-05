import { useDispatch } from "react-redux";
import useFetch from "./main";
import { useRouter } from "next/navigation";
import { signIn } from "../store/features/user/userSlice";

export interface User {
  username: string;
  email: string;
  password: string;
}

export const useSignUp = () => {
  const router = useRouter();
  const { res, error, isLoading } = useFetch<any, User>({
    options: { url: "/auth/signup", method: "POST" },
    onSuccess: () => {
      router.push("/signin");
    },
  });
  return { signUp: res, isLoading, error };
};

export const useSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { res, error, isLoading } = useFetch<
    any,
    { user: Omit<User, "password">; access_token: string }
  >({
    options: { url: "/auth/signin", method: "POST" },
    onSuccess: (data) => {
      dispatch(signIn({ ...data.data.user, token: data.data.access_token }));
      router.push("/chats");
    },
  });
  return { signIn: res, isLoading, error };
};
