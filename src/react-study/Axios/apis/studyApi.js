// import할 api 요청 함수 작성
// https://jsonplaceholder.typicode.com/users
// root/users로 get요청

import axios from "axios"

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const getUserApi = async () => {
  const response = await instance.get("/users");
  return response;
}