/** @jsxImportSource @emotion/react */
import { useState } from "react"
import * as s from "./styles"
import { useUpdatePasswordMutation } from "../../hooks/useMyPage";
import { useForm } from "../../../../hooks/useForm";
import { toast } from "react-toastify";

// 패스워드 변경 버튼을 누르면 보임
// 취소버튼 누르면 closeEdit 호출해서 이전화면으로
export default function EditPassword({closeEdit}) {
  const [errors, setErrors] = useState({});
  const {formVal, handleChange} = useForm({
    currentPassword: "",
    newPassword: ""
  });
  const {mutate, isPending} = useUpdatePasswordMutation();
  const handleSubmit = () => {
    if(isPending) return;

    mutate(formVal, {
      onSuccess: () => closeEdit(),
      onError: (error) => {
        if(error.response) {
          const errorRes = error.response.data;
          if(Array.isArray(errorRes)) {
            let backendError = {};
            for (let errorObj of errorRes) {
              backendError = {...backendError, errorObj};
            }
            setErrors(backendError);
            return;
          }
        }

        console.log(error);
        toast.error("비밀번호 변경 실패");

      }
    });
  }

  return (
    <>
      <h3 css={s.title}>비밀번호 변경</h3>
      <div css={s.inputGroup}>
        <label css={s.label}>현재 비밀번호</label>
        <input 
          type="password" 
          css={s.input}
          name='currentPassword'
          value={formVal.currentPassword}
          onChange={handleChange}
          placeholder="현재 비밀번호를 입력하세요"
        />
        {errors.currentPassword && (
          <div css={s.errorMessage}>{errors.currentPassword}</div>
        )}
      </div>
      <div css={s.inputGroup}>
        <label css={s.label}>새 비밀번호</label>
        <input 
          type="password" 
          css={s.input} 
          name="newPassword"
          value={formVal.newPassword}
          onChange={handleChange}
          placeholder="새 비밀번호를 입력하세요"
        />
        {errors.newPassword && (
          <div css={s.errorMessage}>{errors.newPassword}</div>
        )}
      </div>
      <div css={s.buttonGroup}>
        <button 
          css={s.cancelButton}
          onClick={closeEdit}
          disabled={isPending}
        >취소</button>
        <button 
          css={s.saveButton}
          disabled={isPending}
          onClick={handleSubmit}
        >변경완료</button>
      </div>
    </>
  )
}
