import { useState } from "react"

// 조건부 렌더링 - UI 상태 or 권한 상태
export default function UseState07() {
    // 로그인상태
    const [isLogin, setIslogin] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const toggleLogin = () => {
        // 함수형 업데이트
        setIslogin((prev)=>!prev);
    };

    const getTokenClick = () => {
        setAccessToken("토큰");
    };

    // JS의 모든 값은 boolean값이 될 수 있음
    // A가 trethy면 B가 평가
    // A && B
    // 값 && 함수(컴포넌트) -> 값이 
    return (
        // 삼항 연산자 -> 데이터 2개가 달리 보임
        // && 연산자 -> 보이거나 안보이거나
        <div>
            <button onClick={toggleLogin}>
                {isLogin ? "로그아웃" : "로그인"}
            </button>
            <h2>{isLogin ? "어서오세요" : "로그인이 필요합니다."}</h2>
            <button onClick={getTokenClick}>토큰 가져오기</button>
            {accessToken && <p>토큰 갱신 성공</p>}
        </div>
    );
}
