import React, { useEffect } from 'react'
import ProductItem from './ProductItem';
import { useState } from 'react';
import { getAllProductApi } from './apis/productApi';

export default function Axios06() {
  const [products, setProducts] = useState([]);
  const [refetch, setRefetch] = useState(true);
  // ui 테스트
  const mockProducts = [
    {id: 1, name: "가", price: 10000},
    {id: 2, name: "나", price: 20000}
  ];

  const getProducts = async () => {
    try {
      const res = await getAllProductApi();
      const productsData = res.data;
      setProducts(productsData);
      setRefetch(false);
    } catch(error) {
      // 비움
    }
  }

  useEffect(() => {
    if (refetch) {{
      getProducts();
    }}
  },[refetch]);

  return (
    <div>
      <h1>상품 목록</h1>
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
          {products.map((p) => {
            return <ProductItem key={p.id} product={p} doRefetch={() => setRefetch(true)}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

// 자식컴포넌트들이 get요청할 권한
// -> refetch 상태 생성
// -> true일때만 get요청을 하도록
// useEffect는 refetch상태변경이 되면 실행
// -> false가 되는 시점이 필요
// -> get요청 이후에 false가 되게 만들자!