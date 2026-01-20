import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// 1. src/assets에 저장된 이미지 -> 빌드시 번들에 포함됨
// 2. public/assets에 저장된 이미지 -> 정적 이미지
// "/"로 접근할 수 없음


const cardStyle = (isActive) => css`
    position: relative;
    width: ${isActive ? "220px" : "120px"};
    height: ${isActive ? "330px" : "180px"};
    padding: 10px;
    box-sizing: border-box;
    background-color: ${isActive ? "#ddd" : "#eee"};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
`;

const imageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const contentStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    background-color: rgba(0,0,0,0.6);
`;

// 화살표함수형으로 만드는 컴포넌트
const MoiveCard = ({movie, isActive, onClick}) => {
    const {title, year, description, imgUrl} = movie;

    return (
        // 전달받은 props에 따라 다르게 작동
        <div onClick={onClick} css={cardStyle(isActive)}>
            <img src={imgUrl} alt={title} css={imageStyle}/>
            <div css={contentStyle}>     
                <h4>{title}</h4>
                <small>{year}</small>
                {isActive && <p>{description}</p>}
            </div>
        </div>
    );
}

const MOVIES = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "꿈 속에서 꿈꾸는 범죄스릴러",
        imgUrl:"https://i.namu.wiki/i/7D7wOgD2QOI6rjmXEJpQwmE-SE6tinJn2BK7doRu3tyYZ5XjfZ902np0oX4BT59HihjRam1-EZXWbTM-cJm2tMbcFcHQMQt72zs5F6QF85GrmMix_r4nAh9BrIeq_KLYlTHT4QAesAVrpbEC7Nc9vw.webp"
    },
    {
        id: 2,
        title: "인테스텔라",
        year: 2010,
        description: "인류 생존과 시공간 표현한 SF 영화",
        imgUrl:"https://i.namu.wiki/i/1Vk9H1zrSoe3myPN8uog-ERk2v22_KwVN_iU9fGEjH9UUpZq-TALEtn1Fg_etEyS53hM9OG3rJRlKYpAa-tZaFiyiQ82UuB7rmj7vx0d374R3Gj0cehQj61y6e2UUM6TJDFhfm3sj_py1etZYjy24w.webp"
    },
    {
        id: 3,
        title: "좀비딸",
        year: 2025,
        description: "좀비가 되어버린 딸을 숨기며 사는 영화",
        imgUrl:"https://i.namu.wiki/i/mkuxFEZwynZxWPLK-2uKFeBLv9dwPfXqG88GEH3PJkM8VbUwDAjQZ9BCsqIY58DXj3ytHFE6_jKnHjMQzEUbtg.webp"
    },
]

const layout = css`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export default function Emotion02() {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        // setInterVal(() => {}, ms) 함수
        // ms마다 첮번째 매개변수로 전달받은 함수 실행
        const intervalId = setInterval(() => {
            setActiveId((prev) => {
                // 처음 시작전
                if(prev === null) {
                    return MOVIES[0].id;
                }

                // 어떤 movie가 식별되었는지 식별
                // movie의 id로 MOVIES의 idx 리턴
                const currentIdx = MOVIES.findIndex((m) => prev === m.id);

                // 다음 idx
                const nextIdx = currentIdx === MOVIES.length - 1
                                ? 0
                                : currentIdx + 1;

                return MOVIES[nextIdx].id;
            })
        }, 2000);

        // webApi를 useEffect로 사용한 경우(setInterval, setTimeout)
        // 언마운트시 해제해줘야함
        return () => clearInterval(intervalId);
    },[])
  return (
    <div css={layout}>
        {/* map()으로 MovieCard 렌더링 */}
        {MOVIES.map((m) => {
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
