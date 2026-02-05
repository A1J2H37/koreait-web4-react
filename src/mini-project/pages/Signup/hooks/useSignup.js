import { useMutation } from "@tanstack/react-query"
import { signupAPI } from "../../../apis/endpoints/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export const useSignupMutation = () => {
  const navigator = useNavigate();

  return useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success("회원가입 성공") // 전역토스트
      navigator("/signin");
    },
    onError: (error) => {
      // 서버에서 내려주는 validation이라는
      // 상태로 처리
      console.log(error.response);
      const msg = error.response?.data
      toast.error(msg) // 전역토스트
    }
  })
}

export const useSignupValidation = (formVal) => {
  const {
    username, password, passwordConfirm, name, email
  } = formVal;

  // 빈값 체크, 비번-비번확인 동일한지 체크
  // 컴증실패한 필드는 newError객체에 key-value형대로 업그레이드
  const newError = {};
  if(!username.trim()) {
    newError.username = "아이디를 입력해주세요"
  }
  if(!password.trim()) {
    newError.password = "비밀번호를 입력해주세요"
  }
  if(!passwordConfirm.trim()) {
    newError.passwordConfirm = "비밀번호를 다시 입력해주세요"
  } else if(passwordConfirm !== password) {
    newError.passwordConfirm = "비밀번호가 일치하지 않습니다."
  }
  if(!name.trim()) {
    newError.name = "이름을 입력해주세요"
  }
  if(!email.trim()) {
    newError.email = "이메일을 입력해주세요"
  }

  // 검사를 모두 통과했다면 -> newError: {}
  // 비어있는 js객체라면 keys의 결과는: []
  const isAllValidate = Object.keys(newError).length === 0;

  return {newError, isAllValidate}
}