import { useState } from "react"
import { getSearchProductApi } from "./apis/productApi";

// api 요청 시 쿼리스트링 조립
export default function Axios02() {
  const [inputVal, setInputVal] = useState("");
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchClick = async () => {
    // 상품검색 api 호출함수
    try {
      const response = await getSearchProductApi(inputVal);
      console.log(response.data);
      /*
      데이터 생성주기 같음
      -> 상태 함침
      */
      setProducts(response.data);
      setErrorMsg("");
    } catch(error) {
      // 백엔드에 던져진 에러
      console.log(error);
      if (error.response) {
        const resErrorMsg = error.response.data;
        setErrorMsg(resErrorMsg);
      }
    }
  }

  return (
    <div>
      <input 
      type="text" 
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
      {
        errorMsg && (
          <div>
            {errorMsg}
          </div>
        )
      }
      <table>
        <thead>
            <tr>
              <th>ID</th>
              <th>상품명</th>
              <th>가격</th>
            </tr>
        </thead>
        <tbody>
          {
            products.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
