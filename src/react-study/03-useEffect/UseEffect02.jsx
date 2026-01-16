import React, { useEffect, useState } from 'react'

export default function UseEffect02() {
    // 상태가 바뀐 이후 계산되어야 하는 것들
    // 검색어 -> 검색어 추천
    const [inputVal, setInputVal] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const keywords = [
        "리액드","자바스크립트","리액트네이티브",
        "자바","스프링","파이썬",
        "스프링부트", "흑백요리사",
        "최강록", "최강화"
    ];

    // inputVal호출 후 -> 업데이트 완료된 이후에
    // 따로 계산되어야함
    useEffect(() => {
        // ""일때는 모든 단어가 매칭
        if (inputVal === "") {
            return;
        }

        // inputVal이 포함된 문자열을 keywords에서 골라서
        // syggestion의 상태를 업데아트
        let newSuggestions = [];
        for (let keyword in keywords) {
            if (keyword.includes(inputVal)) {
                newSuggestions = [...newSuggestions, keyword];
            }
        }

        newSuggestions = keywords.filter((keyword) => {
            return keyword.includes(inputVal);
        });
    },[inputVal]);
  return (
    <div>
        <h2>검색</h2>
        <input 
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="검색어 입력" 
        />
        <ul>
            {/* 여러개의 li 태그들이 들어와야 함 */}
            {/* suggestion을 li로 렌더링 */}
            {suggestions.map((keyword, i) => {
                return <li key={i}>
                    <button>
                        {keyword}
                    </button>
                </li>
            })}
        </ul>
    </div>
  )
}
