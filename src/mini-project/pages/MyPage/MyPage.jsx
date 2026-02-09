/* @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./styles";
import EditPassword from "./components/EditPassword/EditPassword";
import FormInput from "./components/FormInput/FormInput";
import { useMyInfo } from "./hooks/useUserInfo";
import { useProfileImage } from "./hooks/useMyPage";
import { ClimbingBoxLoader } from "react-spinners";

export default function MyPage() {
  const [isPasswordMode, setIsPasswordMode] = useState(false);
  const {handleImgChange, profileImg} = useProfileImage();
  const {data:user, isLoading} = useMyInfo();
  const fileInputRef = useRef(null);

  if(isLoading) {
    
     return (<div css={s.container}>
      <ClimbingBoxLoader
        color="#2d80e5"
        size={60}
      />
    </div>)
  }

  return (
    <div css={s.container}>
      <div css={s.myPageBox}>
        <div css={s.profileSection}>
          <div 
            css={s.imgWrapper}
            onClick={() => fileInputRef.current.click()}
          >
            {/* 배열로 css cascading 가능 */}
            {/* 뒤쪽 css가 기존 css 덮어씌움 */}
            <div css={[s.imageBox, s.imageBoxEditable]}>
              {
                profileImg
                ? <img src={profileImg} alt="프로필" />
                : <div css={s.imgPlaceholder}>{
                  user?.name[0] || "?"
                }</div>
              }
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
            ? <EditPassword 
              closeEdit={() => setIsPasswordMode(false)}
            /> 
            : <FormInput 
              setIsPasswordMode={setIsPasswordMode}
            />
          }
        </div>
        <input 
          type="file"
          accept="image/*" 
          css={s.hiddenInput}
          ref={fileInputRef}
          // 파일업로드: change이벤트
          onChange={handleImgChange}
        />
      </div>
    </div>
  );
}
