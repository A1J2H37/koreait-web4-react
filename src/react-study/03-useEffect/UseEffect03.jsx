import React, { useEffect, useState } from 'react'


export default function UseEffect03() {
    const [temperature, setTemperature] = useState(8);
    const [msg, setMsg] = useState("");

    // 10도 이하 -> 추움 메세지 출력
    // 10~25 -> 좋은 날씨
    // 25초과 -> 더움
    useEffect(() => {
        if (temperature < 10) {
            setMsg("추움");
        } else if (temperature < 26) {
            setMsg("좋은 날씨");
        } else {
            setMsg("더움");
        }
    }, [temperature]);

    const Plus = () => {
        setTemperature((prev) => prev + 1);
    }

    const Minus = () => {
        setTemperature((prev) => prev - 1);
    }

  return (
    <>
        <h2>에어컨 리모컨</h2>
        <h1>{temperature}</h1>

        <button onClick={Plus}>+</button>
        <button onClick={Minus}>-</button>

        <h3>{msg}</h3>
    </>
  )
}
