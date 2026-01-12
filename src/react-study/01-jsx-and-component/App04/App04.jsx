import MenuList from "./menuList";


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

export default function App04() {
  return (
    <div>
        <h1>메뉴</h1>
        {/* App04가 MenuList의 부모가 됨 */}
        {
        // 자식 컴포넌트한테 데이터 전달
        // key-value 형식으로 전달해야 객체로 포장되어서 연걸
        }
        <MenuList title={menuTitle} menus={menus} />
    </div>
  )
}
