import React from 'react'
import { useGetAllProducts } from './useProducts'
import ProductItem from './ProductItem';

export default function ReactQuery05() {
  // axios와 다른점 - 부모컴포넌트에서 상태 저장 X
  // RQ가 전역으로 저장하고 있음
  const {data:products, isLoading, error, isError} = useGetAllProducts();

  if(isLoading) {
    return <h1>로딩중...</h1>
  }

  if(isError) {
    console.log(error.mesage)
    return <h1>ERROR</h1>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>가격</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => {
            return <ProductItem key={p.id} product={p} />
          })}
        </tbody>
      </table>
    </div>
  )
}
