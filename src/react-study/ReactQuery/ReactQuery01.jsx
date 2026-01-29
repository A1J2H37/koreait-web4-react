import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'

export default function ReactQuery01() {
  // js에서 비구조할당시
  const sample = {
    a: 1,
    b: 2
  }
  // a를 aa라고 부르겠다, b는 bb라고 부르겠다
  const {a: aa,b: bb} = sample;

  const {
    data: products, // get요청 결과
    error, // 에러 객체
    isLoading, // 더이터 요청만 간 경우(응답오는 동안)
    isError, // 에러 여부
  } = useQuery({
    // get요청 결과를 key-value 형태로 전역에 저장
    // 다른텀폰너트에서 다른 티로 저장시 get요청 안하고 재사용
    queryKey: ["getAllproducts"], // 컨트롤러 이름
    // api 요청함수를 정의
    queryFn: async () => {
      const url = "http://localhost:8080/product/all"
      const response = await axios.get(url);
      return response.data;
    },
    // 선택옵션들
    staleTime: 0, // 데이터의 신선도 설정
    // A -> B -> C
    // B가 A의 요청결과를 필요로할때 !!A의 요청결과
    enabled: true, // false면 수동으로만 실행
    retry: 3, // 실패시 재시도 횟수
    gcTime: 5 * 60 * 1000 // 케시 메모리 보관시간
  });
  
  if(isLoading) {
    return (
      <div>로딩 중...</div>
    )
  }

  return (
    <div>
      <h1>상품목록</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
