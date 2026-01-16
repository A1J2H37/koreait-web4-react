import React, { useEffect, useState } from 'react'

export default function UseEffect04() {
    const [formVal, setFormVal] = useState({
        "email": "",
        "password": ""
    });
    // {"email":"올바른 이메일 형식이 아닙니다.", "password": "8자 이상"}
    const [errorMsg, setErrorMsg] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    // setFrom에 js객체 업데이트
    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormVal((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        setIsDisabled(() => true);
        const newErrorMsg = [];
        if (!formVal.email.includes("@") && formVal.email.length > 0) {
            newErrorMsg.email = "올바른 이메일 형식이 아닙니다.";
        }
        if (formVal.password.length < 8 && formVal.password.length > 0) {
            newErrorMsg.email = "비밀번호는 8자 이상이어야 합니다."
        }
        setErrorMsg(newErrorMsg);

        // 만약에 errorMsg가 빈 {} 라면
        // -> 잘 입력했음
        // -> 버튼 활성화
        // key들만 리스트로 반환
        const keys = Object.keys(newErrorMsg)
        if (formVal.email &&
            formVal.password &&
            keys.length === 0
        ) {
            setIsDisabled(false);
        }

    },[formVal]);

    return (
    <div>
        <div>
            <input 
                type="email" 
                name='email'
                placeholder='이메일'
                value={formVal.email}
                onChange={inputChangeHandler}
            />
            {errorMsg.email && <p>{errorMsg.email}</p>}
        </div>
        <div>
            <input 
                type="password" 
                name='password'
                placeholder='비밀번호'
                value={formVal.password}
                onChange={inputChangeHandler}
            />
        </div>
        {errorMsg.password && <p>{errorMsg.email}</p>}
        <button 
            disabled={isDisabled}
            onClick={() => alert("가입 성공")}
        >가입하기</button>
    </div>
  )
}
