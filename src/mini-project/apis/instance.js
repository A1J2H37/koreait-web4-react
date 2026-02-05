import axios from "axios";

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
      && !originlaReq._retry
    ) {
      // 임의로 _retry라는 필드를 나중에 추가
      originlaReq._retry = true;
    }

  }
)

export default instance;