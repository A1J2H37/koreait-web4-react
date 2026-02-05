import { useMutation } from "@tanstack/react-query"
import { signinApi } from "../../../apis/endpoints/auth"
import { useAuthStore } from "../../../stores/authStore"
import { toast } from "react-toastify";

export const useSigninMutation = () => {
  const {login} = useAuthStore();
  return useMutation({
    mutationFn: signinApi,
    onSuccess: (data) => {
      const accessToken = data;
      login(accessToken);
      // 전역토스트 - 로그인 성공
      // warning, success, error
      toast.success("로그인 성공")
    },
    onError: (error) => {
      console.log(error.message);
      const errorMsg = error?.response?.data?.message;
      console.log(errorMsg)
      // 전역토스트 - errorMsg
      toast.error(errorMsg)
    }
  })
}