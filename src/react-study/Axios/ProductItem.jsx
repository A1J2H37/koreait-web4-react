import React, { useState } from 'react'
import { deleteProductApi, updateProductApi } from './apis/productApi';
import { useToastStore } from '../ZuStand/store/toastStore';

// 상품 하나당 productItem 컴포넌트 한개
export default function ProductItem({product, doRefetch}) {
  // 수정 상태에 따라 달라지는 조건부 렌더링
  // 수정인지 아닌지 판단하는 상태
  const [isEditing, setIsediting] = useState(false);
  // 수정시 input들의 값을 기억하는 상태
  const [editVal, setEditVal] = useState({
    name: product.name,
    price: product.price
  }); // get으로 빋아온 데이터를 초기값으로
  const {showToast} = useToastStore();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEditVal((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  // GET요청을 제외한 나머지 요청
  // -> db를 수정 -> 서버의 상태가 수정

  // 삭제 핸들러
  const handleDelete = async () => {
    const agree = confirm("삭제 하시겠습니까?")
    if (!agree) return;

    try {
      await deleteProductApi(product.id);
      showToast(`${product.name} 삭제 완료`)
      // get요청 한번 더
      doRefetch();
    } catch(error) {
      if(error.response) {
        const msg = error.response.data;
        showToast(msg);
      }
    }
  }
  
  // 업데이트 핸들러
  const handleUpdate = async () => {
    const agree = confirm("업데이트 하시겠습니까?")
    if (!agree) return;

    try {
      // js객체 -> JSON -> dto객체
      await updateProductApi(product.id, editVal);
      setIsediting(false);
      showToast(`/${product.name} 수정 완료`)
      doRefetch();
    }
    catch (error) {
      if(error.response) {
        const msg = error.response.data;
        showToast(msg);
      } else {
        // 서버가 아닌 기타 에러
      }
    }

  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>
        {
          isEditing 
          ? <input 
              type='text'
              name='name'
              value={editVal.name}
              onChange={(e) => handleChange(e)}
            />
          : product.name 
        }
      </td>
      <td>
        {
          isEditing 
          ? <input 
              type='number'
              name='price'
              value={editVal.price}
              onChange={(e) => handleChange(e)}
            />
          : product.price
        }
      </td>
      <td>
        {
          isEditing
          ? <>
              <button onClick={handleUpdate}>완료</button>
              <button onClick={() => setIsediting(false)}>취소</button>
            </>
          : <>
              <button onClick={() => setIsediting(true)}>수정</button>
              <button onClick={handleDelete}>삭제</button>
            </>
        }
      </td>
    </tr>
  )
}
