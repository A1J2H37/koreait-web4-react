// axios는 객체하나를 만들어서 재사용 가능
// -> 여러 설정을 미리 정의하고 사용

import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/product"
});

// 상품 검색 API 호출 함수
export const getSearchProductApi = async (q) => {
  // http://localhost:8080/product/search
  const response = await instance.get("/search", {
    // params로 정의하면 쿼리스트링 알아서 조립
    // http://localhost:8080/product/search?nameKeyword=키보드
    params: {
      nameKeyword: q
    }
  });
  return response;
}