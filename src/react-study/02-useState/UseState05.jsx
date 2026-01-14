import React, { useState } from 'react'

export default function UseState05() {
    const [todos, setTodos] = useState([]); 
    const [inputVal, setInputVal] = useState("");

    // 정의해놓은 상태들로
    // input에 todo를 입력하면
    // ul안에 li들로 Todo들이 보임
    const handleChangeInput = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };

    const addTodoClick = () => {
        // [] = ["빨래하기"]
        // push 원본이 수정되는 메서드
        // 1. setter에는 언제나 새 객체
        // 2. prev는 배열, 객체도 기억하고 있으나 spread 권장
        setTodos((prev) => [...prev, inputVal]);
        // const newTodos = [...todos, inputVal];
        // setTodos(newTodos);
    };

  return (
    <div>
        <input 
            type="text"
            // value가 inputVal
            // 변경되면 inputVal이 바뀜
            value={inputVal}
            onChange={handleChangeInput}
            placeholder="TO-DO 입력"    
        />
        <button onClick={addTodoClick}>TO-DO 추가</button>
        <ul>
            {
                todos.map((todo, i) => {
                    // index 넣으면 안됨\
                    // 리액트가 리스트르 렌더링할떄
                    // key를 기준으로 변경을 감지
                    return <li key={i}>{todo}</li>;
                })
            }
        </ul>
    </div>
  )
}
