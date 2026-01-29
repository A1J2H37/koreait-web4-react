import React, { useState } from 'react'
import { useSearchProducts } from './useProducts';

// enabled 기능, 멀티key
export default function ReactQuery03() {
  const [inputVal, setInputVal] = useState("");
  const [nameKeyword, setNameKeyword] = useState("");
  const [products, isLoading, error, isError]= useSearchProducts(nameKeyword);

  const handleClick = () => {
    setNameKeyword(inputVal);
    setInputVal("");
  }


  if (isError) {
    console.log(error.message)
  }

  if (isLoading) {
    return (
      <div>로딩 중...</div>
    )
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder='검색어 입력'
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleClick}>검색</button>
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
