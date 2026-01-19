import React, { useEffect, useState, useRef } from 'react'

export default function UseRef01() {
    const [value, setValue] = useState("");
    // 초기값을 생성자처럼 사용
    const preValueRef = useRef("");


    // 이전값 기억해야 하는 상황
    // 일반변수 -> 렌더링될 때 초기화
    // useState의 변수 -> 값이 변하니 리렌더링 발생
    // useRef -> 렌더링과 무관하게 값을 지정하는 변수제공 훅

    useEffect(() => {
        // 변수에 저장된 값이 업데이트가 되긴 되는데
        // 렌더링과는 무관

        // 우리가 넣어준 값은 current에 있음
        console.log(preValueRef.current);
        preValueRef.current = value;
        console.log(preValueRef.current);
    }, [value])

  return (
    <div>
        <input 
        type="text" 
        onChange={(e) => setValue(e.target.value)}
        />
        <p>현재: {value}</p>
        <p>이전: {preValueRef.current}</p>
    </div>
  )
}
