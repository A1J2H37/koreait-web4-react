import React, { useState } from "react";
import { addProductApi } from "./apis/productApi";
import { useToastStore } from "../ZuStand/store/toastStore";

export default function Axios04() {
  // inputValue 상태
  const [inputVal, setInputVal] = useState({
    name: "",
    price: "",
  });
  // 전역에 있는 Toast 호출함수 불러옴
  const { showToast } = useToastStore();

  //
  const handleAddClick = async () => {
    try {
      await addProductApi(inputVal);
      showToast("상품 등록 성공");
      setInputVal({
        name: "",
        price: "",
      });
    } catch (error) {
      if (error.response) {
        // error.resposne.data
        showToast("올바른 값을 입력해주세요");
      } else {
        showToast("서버에 문제가 발생했습니다");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>상품 단건 추가</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="상품명"
            name="name" // dto 필드명과 name이름을 동기화
            value={inputVal.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="가격"
            name="price"
            value={inputVal.price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button onClick={handleAddClick}>등록하기</button>
    </div>
  );
}
