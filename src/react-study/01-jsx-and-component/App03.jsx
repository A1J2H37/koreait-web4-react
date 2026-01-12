import React from 'react'

// 컴포넌트는 첫글자가 대문자(class 처럼)
// 파일이름.jsx과 동일한 이름이어야 함
export default function App03() {
    const age = 20;
    const forAdults = ["맥주", "와인", "위스키"];
    const forChildren = ["우유", "당근소스", "사이다"];

    // age > 19 ? 성인 : 어린이
    const isAdult = age > 19;
    const menuTitle = isAdult ? "성인용 메뉴" : "어린이용 메뉴"
    let menus
    if(isAdult) {
        menus = forAdults;
    } else {
        menus = forChildren;
    }

    // 조건판단은 return 위에서 작성하는게 권장됨
  return (
    <div>
        <h1>메뉴</h1>
        <h2>
            {/* 성인이면 성인메뉴, 어린이면 어린이메뉴 */}
            {menuTitle}
        </h2>
        <ul>
            {/* 성인이면 forAdults 메뉴들을 li로 출력 */}
            {menus.map((menu, i) => {
                return <li key={i}>{menu}</li>
            })}
            {/* 어린이면 forChildren 메뉴들을 li로 출력 */}
        </ul>
    </div>
  )
}
