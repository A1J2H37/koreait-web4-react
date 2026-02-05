/* @jsxImportSource @emotion/react */
import * as s from "./styles"
import logo from "../../../assets/only_logo.svg"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useSigninMutation } from "./hooks/useSignin";

export default function Signin() {
  const {formVal, handleChange} = useForm({
    username: "",
    password: ""
  });
  const {isPending, mutate} = useSigninMutation();

  const handleSignin = () => {
    const {username, password} = formVal;
    if (!username || !password) {
      // 토스트
      return
    }
    if(isPending) return;
    mutate(formVal, {
      onSuccess: () => {
        // 새로고침 + 홈url로
        setTimeout(() => {
          window.location.href = "/"
        },2500)
      }
    })
  }

  return (
    <div css={s.container}>
      <div css={s.signinBox}>
        <div css={s.logoBox}>
          <img src={logo} alt="logo" css={s.logo} />
        </div>
        <h1 css={s.title}>로그인</h1>
        <div css={s.formBox}>
          <div css={s.inputBox}>
            <label>아이디</label>
            <input 
              type="text"
              value={formVal.username}
              name="username"
              onChange={handleChange}
              placeholder="아이디 입력"
              
              />
          </div>
          <div css={s.inputBox}>
            <label>비밀번호</label>
            <input 
              type="password"
              value={formVal.password}
              name="password"
              onChange={handleChange}
              placeholder="비밀번호 입력"
            />
          </div>
          <button 
            css={s.btn}
            onClick={handleSignin}
            disabled={isPending}
          >
            {isPending ? "로그인 중" : "로그인"}
          </button>
          <div css={s.signupTextBox}>
            <span css={s.signupText}>계정이 없으신가요?</span>
            <Link css={s.signupLink} to="/signup">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
