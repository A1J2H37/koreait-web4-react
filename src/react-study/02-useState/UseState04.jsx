import React, {useState} from 'react'

export default function UseState04() {
    const [ count, setCount ] = useState(0);
    const increase = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // 두번 호출해도 setter들은
        // 리액트가 batch처리
        // => 카운트 찹조값은 0으로 동일

        // 함수형 업데이트
        // setter에 함수 전달
        // 리액트가 첫번째 매개변수애 이전값을 넣어줌
        // 이전값을 쓰는 경우 함수형 업데이트 권장
        setCount((prev) => {prev + 1});
        setCount((prev) => {prev + 1});
    };
    const decrease = () => {
        // 값이 하나만 바뀜
        // 함수형 업데이트 필요 X
        // 복잡해질 가능성 때문에
        // 이전값을 쓰는 경우 함수형 업데아트 권장 
        setCount(count - 1);
    };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}
