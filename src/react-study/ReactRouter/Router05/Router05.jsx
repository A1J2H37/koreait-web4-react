import React from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'

export default function Router05() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<OrderList />}/>
      <Route path="/order" element={<OrderDetail />}/>
    </Routes>
    </BrowserRouter>
  )
}

function OrderList() {
  const orders = [
    {product: "노트북", quantity: 1, status: "배송중"},
    {product: "키보드", quantity: 2, status: "배송완료"},
    {product: "마우스", quantity: 3, status: "주문접수"},
  ]

  return (
    <div>
      <h1>주문목록</h1>
      <button onClick={() => showToast("라우터")}>토스트테스트</button>
      <div>
        {/* 
        1. orders.map => ordersCard 
        상품이름만 보임
        */}
        {orders.map((o) => {
          const {product, quantity, status} = o;
          return (
            <div key={product}>
              <Link to={`/order?product=${product}&quantity=${quantity}&status=${status}`}>{product}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function OrderDetail() {
  // props가 아니라 url로 데이터를 전달받아
  // 각 정보 렌더링 채
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 쿼리스트링에서 뽑아온 데이터 -> string
  const product = searchParams.get("product");
  const quantity = searchParams.get("quantity");
  const status = searchParams.get("status");

  return (
    <div>
      <h1>주문 상세 페이지</h1>
      <div>
        <p>상품명: {product}</p>
        <p>주문 수량: {quantity}</p>
        <p>배송 상태: {status}</p>
      </div>
      <button onClick={() => navigate("/")}>목록으로</button>
    </div>
  )
}