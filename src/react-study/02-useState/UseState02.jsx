import React, { useState } from 'react'

export default function UseState02() {
    // setter 호출시 컴폰너트는 재호출
    let myNum = 1; // 재호출시 myNumber에 지정한 값이 다시 담김
    const [count, setCount] = useState(myNum);

    const handlePlusClick = () => {
        setCount(count + 1);
        console.log(myNum);
    }
    
    const handleMinusClick = () => {
        setCount(count - 1);
        console.log(myNum);
    }
  return (
    <div>
        <h1>카운터</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={handleMinusClick}>-1</button>
    </div>
  )
}
