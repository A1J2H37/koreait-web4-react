// Axios 라이브러리

import axios from "axios";
import { useState, useEffect } from "react";

/*
  -fetch() 함수와 다른점
  1. 400 ~ 500 -> 에러 X
  기존에는 에러를 throw해줘야 함
  -> axios는 200대가 아니면 알아서 던져줌 
  2. 인터셉트 가능
  -> 모든 요청 및 응답에 필터레이어 추가 가능
  
  - 동일한 점
  - promise 기반

  npm install axios
*/
export default function Axios01() {
  // 1. api에서 받아온 데이터를 저장할 상태
  const [product, setProduct] = useState([]);

  // 2. 데이터를 다시 불러올지 결정하는 상태
  const [refetch, setRefetch] = useState(false);

  // 컴포넌트가 데이터를 요청하는 시점
  // 3. 컴포넌트가 처음 렌더링 -> 처음 마운트
  useEffect(() => {
    // api 호출 시 첫 렌더링 1화만 요청
    // get요청 axios.get(컨트롤러 주소)

    // get()은 Promise 반환
    axios.get("http://localhost:8080/product/all").then((response) => {
      // response.data에 컨트롤러가 body에 담아준 데이터가 존재
      console.log(response.data);
      setProduct(response.data);
    });
  }, [refetch]);
  // refetch 상태 변할때 마다 또 실행

  return (
    <div>
      <button onClick={(prev) => setRefetch(!prev)}>재요청</button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => {
            const { id, name, price } = p;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
