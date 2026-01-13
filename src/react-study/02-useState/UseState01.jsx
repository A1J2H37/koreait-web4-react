import React, { useState } from "react";

// js에서는 이벤트리스너를 사용해서 클릭을 감지했었음
// react는 onClick
export default function UseState01() {
    // 리액트는 컴폰너트마다 따로 데이터를 저장하는 곳이 있음
    // 그곳에 접근하게 만들어주는 함수가 usestate
    let myName = "홍길동";
    // 배열을 리턴 [현재 리액터가 저장하고 있는 값, setter]
    // 생성자처럼 초기데이터를 넣어줄 수 있음
    const [name, setName] = useState(myName);


    // 리액트는 가상 dom을 가지고 있음
    // 데이터변경이 되었을때 컴포년트를 재호출하는 방식으로 업데이트
    const handleChangeName = () => {
        myName = "김길동";
        console.log("이름 변겅");
        // 일반변수에 값은 변경되었으나 리약트는 감지X
        // setter를 호출하면 변경을 감지
        setName(myName);
        // 변경 감지 -> 값 업데이트 -> 화면 다시 그림
        console.log(myName);
    };

  return (

    <div>
        <div>{name}</div>
        {/* on이벤트이름(카멜게이스) */}
        {/* 이벤트 발생시 작동할 함수 전달 */}
        <button onClick={handleChangeName}>이름변경</button>
    </div>
  )
}
