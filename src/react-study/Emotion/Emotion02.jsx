import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react';

const cardStyle = (isActive) = css`
    width: ${isActive ? "220px" : "120px"};
    height: 220px;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${isActive ? "#ddd" : "#eee"};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`;

const Movies = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "꿈 속에서 꿈꾸는 범죄스릴러"
    },
    {
        id: 2,
        title: "인테스텔라",
        year: 2010,
        description: "인류 생존과 시공간 표현한 SF 영화"
    },
    {
        id: 3,
        title: "좀비딸",
        year: 2025,
        description: "좀비가 되어버린 딸을 숨기며 사는 영화"
    },
]

// 함수형
const MoiveCard = ({movie, isActive, onClick}) => {
    const {title, year, description} = movie;

    return (
        // 전달받은 props에 따라 다르게 작동
        <div onClick={onClick} css={cardStyle(isActive)}>
            <h4>{title}</h4>
            <small>{year}</small>
            {isActive && <p>{description}</p>}
        </div>
    )
}

export default function Emotion02() {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // setInterVal(() => {}, ms) 함수
        // ms마다 첮번째 매개변수로 전달받은 함수 실행

        // ms마다 setActiveId를 호출해서 조작
    },[])
  return (
    <div css={layout}>
        {/* map()으로 MovieCard 렌더링 */}
        {Movies.map((m) => {
            return <MoiveCard 
            movie={m} 
            key={m.id}
            onClick={() => setActiveId(
                activeId === m.id ?
                null : m.id 
            )} // 같은 카드를 한번 더 누르면 null -> 해제
            isActive={activeId === m.id}
        />
        })}
    </div>
  )
}
