import { useMutation } from "@tanstack/react-query"
import { signupAPI } from "../../../apis/endpoints/auth"
import { useNavigate } from "react-router-dom"

export const useSignupMutation = () => {
  const navigator = useNavigate();

  return useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      console.log("회원가입 완료") // 전역토스트
      navigator("/signin");
    },
    onError: (error) => {
      // 서버에서 내려주는 validation이라는
      // 상태로 처리
      console.log(error.response);
      const msg = error.response?.data?.message
      console.log(msg) // 전역토스트
    }
  })
}