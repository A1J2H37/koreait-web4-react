import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  },
  // 브라우저가 쿠키(RefreshToken) 요청에 담을 수 있게
  withCredentials: true
})

// axios의 인터셉터
instance.interceptors.request.use(
  (config) => {

    const accessToken = localStorage.getItem("accessToken")

    if(!!accessToken) {
      config
      .headers
      .Authorization = `Bearer ${accessToken}`;
    }

    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => res, // 200번대 응답은 패스
  async (error) => {
    // 서버에서 내려진 에려 / 일반 에러
    // accessToken 유효시간: 3분
    // 사용자가 3분이라 느끼지 못하게
    // 원래 사용자가 가려고 했던 요청을 다시 보내줘야함

    const originlaReq = error.config; // 원요청의 설정

    if(
      error.response.status === 401
      && error.response.data.error === "ACCESS_TOKEN_EXPIRED"
      // 임의로 _retry라는 필드를 추가
      // 무한 재시도 방지
      && !originlaReq._retry
    ) {
      // 임의로 _retry라는 필드를 추가
      originlaReq._retry = true;

      try {
        // 쿠키에 refresh토큰이 있으므로
        // Authorization 헤더 없이 요청
        const url = "http://localhost:8080/auth/refresh";
        const response = await axios.post(url, {}, { withCredentials: true });

        // 서버에서 받아온 새로운 accessToken
        const newAccessToken = response.data;
        // Zustand의 전역훅을 컴포넌트가 아닌곳에서 호출할때
        // 컴포넌트 생명주기와 무관한 곳이기 때문에 별도의 방식 사용
        // -> getState();
        const {setToken} = useAuthStore.getState()
        setToken(newAccessToken); // 업데이트

        // 기존실패 요청의 헤더 교체
        originlaReq
          .headers
          .Authorization = `Bearer ${newAccessToken}`;

        // 원래 요청한 곳으로 새 토큰으로 다시 실행
        return instance(originlaReq);
      } catch (refreshError) {
        // refreshToken 마져 만료
        localStorage.removeItem("accessToken");
        // 로그인 칭으로 보내기(개밯완료 전에는 X)
        // window.location.href = "/signin"
        return Promise.reject(refreshError);
      }
    }
    // 그냥 401, 400... - if 밖/ 토큰이 아예 X|권한 없음
    console.log("응답 인터셉터에서 오류 발생")
    console.log(error)
    return Promise.reject(error);
  }
)

export default instance;