/* @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import EditPassword from "./components/EditPassword/EditPassword";
import FormInput from "./components/FormInput/FormInput";
import { useMyInfo } from "./hooks/useUserInfo";

export default function MyPage() {
  const [isPasswordMode, setIsPasswordMode] = useState(false);
  const profileImg = ""; // 나중에 api에서 교체
  const {data:user, isLoading} = useMyInfo();

  if(isLoading) {
    <div css={s.container}>
      <div>로딩 중...</div>
    </div>
  }
  return (
    <div css={s.container}>
      <div css={s.myPageBox}>
        <div css={s.profileSection}>
          <div css={s.imgWrapper}>
            <div css={s.imageBox}>
              {profileImg ? (
                <img src={profileImg} alt="프로필" />
              ) : (
                <div css={s.imgPlaceholder}>?</div>
              )}
            </div>
          </div>
          <div css={s.helloCard}>
            <div css={s.usernameLine}>
              <span css={s.username}>{user?.name || "사용자"}</span>
              <span css={s.nim}>님</span>
            </div>
            <div css={s.helloText}>안녕하세요</div>
          </div>
        </div>
        <div css={s.formSection}>
          {
            isPasswordMode
            ? <EditPassword />
            : <FormInput />
          }
        </div>
        <input 
          type="file"
          accept="image/*"  
        />
      </div>
    </div>
  );
}
