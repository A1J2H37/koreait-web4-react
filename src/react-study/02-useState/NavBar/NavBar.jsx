import React, { useState } from 'react'
import NavItem from './NavItem';

const NAV_ITEMS = [
  {id: 1, label: "홈"},
  {id: 2, label: "게시판"},
  {id: 3, label: "마이페이지"},
  {id: 4, label: "로그아웃"},
];

export default function NavBar() {
  // 선택되어지는 컴폰너트들
  // 선택된걸 식별할 수 있어야함
  // map()등으로 뿌려주는 컴포넌트에서 상태 전달
  const [activeId, setActiveId] = useState(0);
  return <nav>
    <ul>
      {NAV_ITEMS.map((item) => {
        return (
          <NavItem 
              key={item.id}
              id={item.id}
              label={item.label}
              // 여러개의 NavItem 컴포넌트에  
              // setter를 넘겨줌
              onClick={setActiveId}
              isActive={item.id === activeId}
          />
        )
      })}
    </ul>
  </nav>;
}
