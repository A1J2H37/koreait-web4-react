// React Router - 필수 라이브러리
// 설치: npm install react-router-dom
// 원래:URL을 변경 -> get요청

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// 라우터 라이브러리: URL을 변경 -> 컴포넌트 호출
export default function Router01() {
  // 라우팅만 하는 컴포넌트
  return (
    /*
      BrowserRouter: 리액트라우터 최상위 컴포넌트
      - 이 컴폰너트 내부에서만 url 라우팅(Link, Route)이 가능
      - url이 변경될때 브라우저가 작동하는 기본작동을 막고
      리액트 방식(컴포넌트 호출)으로 작동하게 해줌

      Routes: 여러 Route들을 그룹화하는 컨테이너
      -> if-else if문
      Route: URL 경로와 컴폰너트를 매칭
      - path: url 경로
      - element: 해당 경로에서 렌더링할 컴포넌트
    */
   // profile & contact를
   // UserRouter라는 하위라우터로 처리
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* path="/경로/*" 하위 경로는 하위라우테이 위임 */}
        <Route path="/user/*"  element={<UserRouter/>}/>
        <Route path="/shop/*"  element={<ShopRouter/>}/>
        {/* path="/*" -> 정의되지 않은 모든 경로 처리(else) */}
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function UserRouter() {

    const accessToken = "토큰입니다";
    // 권한검사 -> 토큰검사
    // 1. accessToken이 있으면 허용
    // 2. accessToken이 없으면 로그인피이지
    if (!accessToken) {
        return (<h1>로그인페이지 컴포넌트</h1>)
    }
    // 3. accessToken이 만료 -> refresh

    return (
        <div>
            <Routes>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

function ShopRouter() {
    // 하위 라우터
    // 하위 하우터에서 /shop/* 들어온 요청 처리
    // 여기서 path는 products or cart
    // 이미 상위인 /shop까지는 처리
    return (
        <div>
            <h1>쇼핑 영역입니다</h1>
            <Routes>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </div>
    )
}

function MainPage() {
  // a -> 페이지 전체가 새로고침: 상태가 초기화
  // ex) 로그인 -> 메인페이지
  // Link -> 컴포넌트 교체만 일어남: 상태가 유지
  return (
    <div>
      <h1>메인페이지</h1>
      <nav>
        <a href="/profile">프로필</a>
        <a href="/contact">연락처</a>
        <Link to="/profile">프로필</Link>
        <Link to="/contact">연락처</Link>
      </nav>
    </div>
  );
}

function ProfilePage() {
  // 리액트라우터의 훅
  // 리턴된 것은 함수
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    alert("프로필 저장 완료");

    // 저장 완료 후 메인페이지로 자동이동
    navigate("/"); // 상태 유지
  };

  const handleCancel = () => {
    /* 
        라우터 대상들은 BrowserRouter에 감싸져있음
        BrowserRouter는 함수호출 순서를 상태로 가지고 있음
        -> 방문 기록을 상태로 가지고 있음

        navigate(-1) -> 바로 직전페이지(뒤로가기 이동)
        navigate(-2) -> 2단계 이전페이지 이동
    */

    if (confirm("취소하시겠습니까?")) {
      navigate(-1);
    }
  };

  return (
    <div>
      <h1>프로필 페이지</h1>
      <div>
        <button onClick={handleSaveProfile}>저장하고 메인으로</button>
        <button onClick={handleCancel}>취소(뒤로가기)</button>
      </div>
    </div>
  );
}

function ContactPage() {
  const navigate = useNavigate();
  // 전송버튼을 누르면
  // confirm으로 전송
  // true면 전송완료 alert 후 메인으로 이동
  // 메인으로 -> 라우팀

  const handleSend = () => {
    if (confirm("전송하시겠습니까?")) {
      alert("전송 완료");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>연락처 페이지</h1>
      <button onClick={handleSend}>전송</button>
      <Link to="/">메인으로</Link>
    </div>
  );
}

function ProductPage() {
  return (
    <div>
      <h1>상품목록</h1>
      <p>입고예정</p>
      <Link to="/shop/cart">장바구니로 이동</Link>
    </div>
  );
}

function CartPage() {
  return (
    <div>
      <h1>장바구니</h1>
      <p>상품 확인</p>
      <Link to="/shop/cart">상품목록으로 이동</Link>
    </div>
  );
}
