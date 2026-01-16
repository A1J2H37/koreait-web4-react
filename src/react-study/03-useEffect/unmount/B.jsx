import React, { useEffect } from 'react'

export default function B() {
    console.log("B 렌더링 시작");
    useEffect(() => {
        console.log("B마운트");

        // useEffect레 넘겨주는 함수에 리턴 정의 가능
        // 이때 함수를 리턴할 수 없음
        // 그 함수는 언마운트때 생성됨
        return () => {
            console.log("B 언마운트");
        }

    }, [])
    console.log("B 곧 렌더링 종료");
  return (
    <h1>B</h1>
  )
}
