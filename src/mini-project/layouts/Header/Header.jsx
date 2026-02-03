/* @jsxImportSource @emotion/react */
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore';
import { MENU_ITEMS } from '../../constants/menu';
import logo_with_font from "../../../assets/logo_with_font.svg";
import * as s from "./styles";

export default function Header() {
  // 아이콘 라이브러리
  // npm install react-icons
  const navigate = useNavigate();
  // 로그인 상태에 따라 로그인/로그아웃 상태 보이기
  // 헤더에서 권한후기 전역상태 권한훅 실행
  const {isAuthenticated, logout} = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/") // 홈화면으로
  }

  return (
    <header css={s.container}>
      <Link to="/" css={s.logo}>
        <img src={logo_with_font} alt="logo" />
      </Link>

      <nav css={s.nav}>
        {MENU_ITEMS.map((menu) => {
          return (
            <Link 
              key={menu.id} 
              to={menu.path} 
              css={s.navLink}
            >
              {menu.name}
            </Link>
          )
        })}
      </nav>

      <div css={s.userSection}>
        {
          isAuthenticated
          ? (
            <>
              <Link to="mypage" css={s.myPageLink}>
                <AiOutlineUser />
                <span>마이페이지</span>
              </Link>
              <button onClick={handleLogout} 
              css={s.logoutButton}>
                <AiOutlineLogout />
                <span>로그아웃</span>
              </button>
            </>
          )
          : (
            <>
              <Link to="/signin" css={s.loginLink}>
                <AiOutlineLogin />
                <span>로그인</span>
              </Link>
            </>
          )
        }
      </div>
    </header>
  )
}
