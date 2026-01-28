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

// 상품 단건 등록 api
// post요청 -> body가 존재
// 매개변수로 body데이터 불러오기
export const addProductApi = async (product) => {

  /*
    {
      name: "키보드",
      price: 50000
    }
  */
  const response = await instance.post("/add", product);
  return response;
}

// 다건추가
export const addBulkProductApi = async (products) => {
  const response = await instance.post("/add/bulk", products);
  return response;
}

// 전체 상품 조회 api함수 정의 - get요청
export const getAllProductApi = async () => {
  const response = await instance.get("/all");
  return response;
}

// 삭제 api함수
export const deleteProductApi = async (id) => {
  const response = await instance.delete(`/${id}`);
  return response;
}

// 업데이트 api
export const updateProductApi = async (id, productData) => {
  const response = await instance.put(`/${id}`, productData);
  return response;
}