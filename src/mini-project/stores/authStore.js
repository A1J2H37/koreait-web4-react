
import { create } from "zustand";

// accessToken을 로그인 성공시 서버에서 받아옴
// localStorage에 저장

// 전역상태도 새로고침하면 사라짐
export const useAuthStore = create((set) => {
  // 초기화 시 localStorage 체크
  // 새로도침해도 local에 있으면 로그인유지
  const accessToken = localStorage.getItem("accessToken");

  return {
    isAuthenticated: !!accessToken,
    accessToken: accessToken,

    // 로그인, 로그아웃 mutation에서 onSuccess 호출
    // setter를 활용한 로그인-로그아웃 함수
    login: (accessToken) => {
      localStorage.setItem("accessToken", accessToken)
      set({
        isAuthenticated: true,
        accessToken: accessToken
      })
    },
    logout: () => {
      localStorage.removeItem("accessToken");
      set({
        isAuthenticated: false,
        accessToken: null
      })
    }
  }
});