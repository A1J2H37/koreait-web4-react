import { useState } from "react";
import { toast } from "react-toastify";

// 이미지 훅
export const  useProfileImage = () => {
  const [isImgLoading, setIsImgLoading] = useState(false);

  const handleImgChange = (e) => {
    if(e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    const type = file.type;
    if(!type.startsWith("image/")) {
      toast.error("이미지 파일만 사용 가능합니다")
      return;
    }
  }

  const maxSize = 3 * 1024 * 1024 // 3MB
  if(file.size > maxSize) {
    toast.error("이미지는 3MB 초과 불가능합니다");
    return;
  }

  setIsImgLoading(true);
  // 파일리더 -> 파일들을 ram으로 로딩하는 객체
  const reader = new FileReader();

  // 파일 다 읽었을때
  reader.onload = (e) => {
    const dataURL = e.target.result;

    // firebase 구글 서비스
    // 부분유료 - 해외결제 카드 필요
    // 5기가까지는 무료
  }

  reader.onerror = () => {
    toast.error("이미지 업로드에 실패했습니다");
    setIsImgLoading(false);
  }

  // 실제 실행
  reader.readAsDataURL(file);

  return {handleImgChange, isImgLoading}
}