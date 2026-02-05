/* @jsxImportSource @emotion/react */
import { Link } from "react-router-dom"
import * as s from "./styles"
import only_logo from "../../../assets/only_logo.svg"
import FormInput from "./components/FormInput";
import { useForm } from "../../hooks/useForm";
import { useRef, useState } from "react"
import { useSignupMutation, useSignupValidation } from "./hooks/useSignup";

export default function Signup() {
  const {formVal, handleChange} = useForm({
    username: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const {mutate, isPending} = useSignupMutation();
  const {newError, isAllValidate} = useSignupValidation(formVal);

  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  // 엔터시 포커스 내려가게
  const handleUsernameKeyDown = (e) => {
    if(e.key === "Enter") {
      passwordRef.current.focus();
    }
  }
  const handlePasswordKeyDown = (e) => {
    if(e.key === "Enter") {
      passwordConfirmRef.current.focus();
    }
  }
  const handlePasswordConfirmKeyDown = (e) => {
    if(e.key === "Enter") {
      nameRef.current.focus();
    }
  }
  const handleNameKeyDown = (e) => {
    if(e.key === "Enter") {
      emailRef.current.focus();
    }

    

  }

  const handleSubmit = () => {
    if(isPending) return;

    if(!isAllValidate) {
      setErrors(newError);
      return;
    };
    // FE의 validation

    const {passwordConfirm, ...signupDto} = formVal;
    mutate(signupDto,{
      onError: (error) => {
        const adviceError = error.response.data;
        if(
          error.response.status === 400
          && Array.isArray(adviceError)
        ) {
          let trimedError = {};
          for(let errorObj of adviceError) {
            trimedError = {...trimedError, ...errorObj};
          }
          setErrors(trimedError);
        }
      }
    })

  }
  return (
    <div css={s.container}>
      <div css={s.signupBox}>
        <div css={s.logoBox}>
          <img src={only_logo} alt="logo" css={s.logo} />
        </div>
        <h1 css={s.title}>회원가입</h1>
        <div css={s.formbox}>
          <FormInput 
            label="아이디"
            type="text"
            name="username"
            value={formVal.username}
            onChange={handleChange} 
            onKeyDown={handleUsernameKeyDown}
            placeholder="4~20자의 영문 소문자, 숫자"
            error={errors.username}
            />
          <FormInput 
            type="password"
            label="비밀번호"
            name="password"
            value={formVal.password}
            onChange={handleChange} 
            onKeyDown={handlePasswordKeyDown}
            placeholder="비밀번호를 입력하세요"
            error={errors.password}
            ref={passwordRef}
            />
          <FormInput 
            type="password"
            label="비밀번호 확인"
            name="passwordConfirm"
            value={formVal.passwordConfirm}
            onChange={handleChange} 
            onKeyDown={handlePasswordConfirmKeyDown}
            placeholder="비밀번호를 다시 입력하세요"
            error={errors.passwordConfirm}
            ref={passwordConfirmRef}
            />
          <FormInput 
            type="text"
            label="이름"
            name="name"
            value={formVal.name}
            onChange={handleChange} 
            onKeyDown={handleNameKeyDown}
            placeholder="아름을 입력하세요"
            error={errors.name}
            ref={nameRef}
            />
          <FormInput 
            type="email"
            label="이메일"
            name="email"
            value={formVal.email}
            onChange={handleChange} 
            placeholder="이메일을 입력하세요"
            error={errors.email}
            ref={emailRef}
          />
          <button 
            css={s.btn} 
            onClick={handleSubmit}>
              회원가입
          </button>
          <div css={s.linkBox}>
            <span css={s.linkText}>이미 계정이 있으신기요?</span>
            <Link to="/signin" css={s.link}>로그인</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
