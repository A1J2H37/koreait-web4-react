import instance from "../instance"

export const signupAPI = async (dto) => {
  const response = await instance.post("/auth/signup", dto);
  return response.data;
}

export const signinApi = async (dto) => {
  const response = await instance.post("/auth/signin", dto);
  return response.data;
}

export const refreshTokenApi = async () => {
  const response = await instance.post(
    "/auth/refresh",
    {},
    {
      withCredentials: true
    }
  );
  return response.data; // 새 accessToken 담겨있음
}