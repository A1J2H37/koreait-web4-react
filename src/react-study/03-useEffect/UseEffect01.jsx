import React, { useEffect, useState } from 'react'

// 렌더링 -> Js객체가 리액트 해석
// -> 가상돔(VDOM) 생성 -> useState가 보관하는 상태 업데이트
// -> 실제 VDOM에 반영
// 반영되는 시점이 마운트
// 언마운트: 컴포넌트에서 제거되는 순간
export default function UseEffect01() {
    console.log("함수 호출뒴 (렌더링 시작)")
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const handleClick = () => {
        console.log("click");
        setCount((prev) => prev + 1);

        if (count % 2 === 0) {
            setMessage("짝수");
        } else {
            setMessage("홀수");
        }
    }

    // useEffect
    // 1. 마운트 시점에 실행될 함수를 
    useEffect(() => {
        // "마운트" 시점: 처음으로 컴포넌트가 실제 dom에 장착되는 순간 
        console.log("처음으로 컴폰너트가 실제 dom에 장착");
    }, [])

    // 렌터가 끝나고 난 뒤에 useEffect 함수가 호출
    // 의존성 배열 없으면 렌더 끝날 때마다 실행

    // 렌더 이후는 실데 dom접근 가능
    // -> 스클롤바 등

    // 2. 의존성 배열에 담긴 값이 변경되어 함수가 실행 
    // -> 이때는 최초 마운트시에도 적용
    // 상대가 모두 업데이트되고 실행
    useEffect(() => {
        console.log("count 변경 감지")
        console.log(`실제 DOM에 반영된 count=${count}`)


    }, [count]);

    console.log("곧 jsx리턴 (렌더 종료 직전)")
  return (
    <div>
        <button onClick={handleClick}>클릭</button>
        <h2>count: {count}</h2>
        <h3>{message}</h3>
    </div>
  )
}
