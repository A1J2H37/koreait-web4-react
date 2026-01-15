import React, { useState } from 'react'

export default function UseState08() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const addTodoClick = () => {
        setTodos((prev) => [...prev,inputVal]);
    };
    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputVal(val);
    };

    const todoList = () => {
        setTodos(
        <ul>
            <li key={id}>{todos}</li>
        </ul>)
    }
  return (
    <div>
        <input 
            type="text" 
            value={inputVal}
            onChange={handleInputChange}
        />
        <button onClick={addTodoClick}>할일 추가</button>
        {/* 추가 된게 없으면 <p>할일 이 없음<p> */}
        {/* 할일이 하나라도 있으면 
        <ul>
            <li></li>
        </ul> 
        */}
        {/* 간접적인 상태 -> useState로 보관 X */}
        {
        
        todos.length>0 
        ? 
        <ul>
            {todos.map((todo, i) => {
                return <li key={i}>{todo}</li>
            })}
        </ul> 
        : <p>할일이 하나도 없음</p>
        
        
        }
    </div>
  )
}
