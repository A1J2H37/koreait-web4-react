import instance from "../instance"

export const signupAPI = async (dto) => {
  const response = await instance.post("/auth/signup", dto);
  return response.data;
}