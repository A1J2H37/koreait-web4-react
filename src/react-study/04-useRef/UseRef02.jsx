/*
    리액트에는 실제 dom 사용 X
    (VDPM <-> DOM 비교하는 메커니즘 때문)
    브라우저 기능을 사용해야 하는 경우
    -> focus(), click()
*/

import { useState,useRef } from "react"

export default function UseRef02() {
    const [value, setValue] = useState("");
    // Dom객체에 직접 접근할 때 사용됨
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    
    const handleKeyDown = (e) => {
        // 실제 dom객체: current에 있음
        const div1 = div1Ref.current;
        const div2 = div2Ref.current;
        const div3 = div3Ref.current;
        const key = e.key;
        if (key !== "Enter") {
            return;
        }
        
        if(value === "1") {
            div1.focus();
        }
        else if (value === "2") {
            div2.focus();
        }
        else if (value === "3") {
            div3.focus();
        }
    }
    
    const handleKeyDown2 = (e) => {

        if (e.key !== "Enter") {
            return;
        }

        const target = e.target;
        if (target === input1Ref.current) {
            input2Ref.current.focus();
        } else if (target === input2Ref.current) {
            input3Ref.current.focus();
        }
    }
    
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

    // 이벤트 핸들러에 매개변수 하나 더 지정
    const handleKeyDown3 = (e, nextRef) => {
        if(e.key === "Enter" && nextRef !== null) {
            nextRef.current.focus();
        }
    }


  return (
    <>
        <div>
            <input 
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="1 ~ 3 입력"
            />
            {/* 
                jsx 태그애 ref속성으로
                실제 dom객체를 
                useRef변수에 대입
                
                div태그는 원래 focus()대상이 아님
            */}
            <div ref={div1Ref} tabIndex={0}>1번</div>
            <div ref={div2Ref} tabIndex={0}>2번</div>
            <div ref={div3Ref} tabIndex={0}>3번</div>
        </div>
        <div>
            {/* 1번에서 enter -> 2번으로 focus */}
            {/* 2번에서 enter -> 3번으로 focus */}
            <input 
            type="text" 
            placeholder="1번" 
            onKeyDown={(e) => handleKeyDown3(e, input2Ref)}
            ref={input1Ref}
            tabIndex={0}
            />
            <input 
            type="text" 
            placeholder="2번"
            onKeyDown={(e) => handleKeyDown3(e, input3Ref)}
            ref={input2Ref}
            tabIndex={0}
            />
            <input type="text" 
            placeholder="3번" 
            ref={input3Ref}
            tabIndex={0}
            />
        </div>
    </>
  )
}
