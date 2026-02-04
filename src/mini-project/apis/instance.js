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

export default instance;