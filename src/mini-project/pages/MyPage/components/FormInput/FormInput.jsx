import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "../../../../hooks/useForm";

export default function FormInput({ isPasswordMode, setIsPasswordMode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const queryClient = useQueryClient();
  // useQuery쿼리키를 통해 캐싱된 전역데이터 가져오기 pk
  const user = queryClient.getQueryData(["getMyInfo"]);
  const { formVal, handleChange, setFormVal, disabled } = useForm({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!!user) {
      setFormVal({
        namne: user.name,
        email: user.email,
      });
    }
  }, [user]);

  return (
    <>
      <div>
        <label>이름</label>
        <input
          type="text"
          name="name"
          value={formVal.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
          disabled={!isEditMode}
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={formVal.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
          disabled={!disabled}
        />
      </div>
      <button onClick={() => setIsPasswordMode(true)}>비밀번호 변경</button>
      {isEditMode ? (
        <div>
          <button onClick={() => setIsEditMode(false)}>취소하기</button>
          <button>수정완료</button>
        </div>
      ) : (
        <button onClick={() => setIsEditMode(true)}>수정하기</button>
      )}
    </>
  );
}
