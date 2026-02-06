import instance from "../instance"

export const getMeApi = async () => {
  const response = await instance.get("/user/me");
  return response.data;
}

// 마이페이지 내정보 수정
export const updateMeApi = async (dto) => {
  const response = await instance.patch("/user/me", dto);
  return response.data;
}

// 마이페이지 비번 수정
export const updatePasswordApi = async (dto) => {
  const response = await instance.patch("/user/me/password", dto);
  return response.data;
}
