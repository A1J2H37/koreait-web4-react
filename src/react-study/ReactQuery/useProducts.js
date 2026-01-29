// 코드 분리
// 컴포넌트 원자성
// 1. 로직(return 이전 코드)은 커스텀 훅들로 js파일로 분리
// 2. return이후 훅코드 -> 여러 컴포넌트
// 여러 컴포넌트 !== 여러 jsx파일
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// 커스텀 훅
// useQuery코드를 js파일로 분리
export const useSearchProducts = (nameKeyword) => {
  const {data, isLoading, isError, error} =  useQuery({
    // 컨트롤러 이름, 퀴리스트링변수들...
    queryKey: ["searchProducts", nameKeyword],
    queryFn: async () => {
      const url = "http://localhost:8080/product/search"
      const res = await axios.get(url, {
        params: {nameKeyword: nameKeyword}
      })
      return res.data;
    },
    enabled: !!nameKeyword // 검색어가 빈값이 아닐때 get요청
  });

  return [data, isLoading, error, isError];
}

// 상품 다건 등록
export const useAddBulkProducts = () => {
  // 생성X, 부모 컴포넌트에 있는 client를 참조
  const queryClient = useQueryClient();
  // get요청 이외에 요청의 주도권은 내가 가짐
  // useMutation은 정의만 되어있고
  // 실제로 호출하려면 mutate()
  // mutate가 mutationFn임
  return useMutation({
    mutationFn: async (products) => {
      const url = "http://localhost:8080/product/add/bulk"
      const res = await axios.post(url, products);
      return res.data;
    },
    onSuccess: () => {
      // products를 포함한 모든 key 전역데이터들이
      // 무효화(stale(상한)상태) -> get요청
      queryClient.invalidateQueries({
        // 무효화할 key가 부분일치만 해도 무효화
        queryKey: ["getAllProduct"]
      })
    },
    onError: () => {
      console.log("ERROR");
    }
  });
}