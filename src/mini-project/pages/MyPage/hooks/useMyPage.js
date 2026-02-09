import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updatePasswordAPI, updateUserAPI} from "../../../apis/endpoints/user";
import { data } from "react-router-dom";

// 이미지 훅
// 임시로 로컬에 저장
export const  useProfileImage = () => {
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  // 기존에 업로드한 이미지가 있다면
  useEffect(() => {
    const saved = localStorage.getItem("profileImg");
    if(saved) {
      setProfileImg(saved);
    }
  })

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
      // 이미지를 url로 변환
      const dataURL = e.target.result;

      try {
        localStorage.setItem("profileImg", dataURL);
        setProfileImg(dataURL);
        toast.success("이미지 저장 완료")
      } catch(error) {
        toast.error("이미지 저장 실패")
        console.log(error);
      } finally {
        setIsImgLoading(false);
      }
      
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
  }

  return {handleImgChange, isImgLoading, profileImg}
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserAPI,
    onSuccess: () => {
      toast.success("정보 수정 완료")
      // get해온 데이터 다시 get요청 트리거
      queryClient.invalidateQueries(["getMyInfo"])
    },
    onError: (error) => {
      if(error.response) {
        const errorMsg = error.response.data;
        toast.error(errorMsg);
      } else {
        console.log(error);
        toast.error("수정 실패")
      }
    }
  });
}

export const useUpdatePasswordMutation = () => {
  return useMutation({
    mutationFn: updatePasswordAPI,
    onSuccess: () => {
      toast.success("비밀번호 변경 완료")
    },
    onError: (error) => {
      const resErrData = error?.response?.data;
      if(typeof resErrData === 'string') {
        toast.error(resErrData);
        return;
      }
    }
  })
}