import React from 'react'
import Layout from './Layout'
import AuthManager from './AuthManager';

// Layout 태그 사이에 들어갈 내용은
// 전부 children이라는 이름의 props로 전달됨
// children이라는 이름은 React에서 미리 정해둔 이름
// 주로 레이아웃 css나 권한관리를 하는 바깥레이어를 만들 때 사용
export default function App05() {
  const isLogin = true;

  return (
    // Layout({children =<h2></h2><p></p>})
    <AuthManager isLogin={isLogin}>
    <Layout>
      <h2>메인페이지</h2>
      <p>레이아웃 적용</p>
    </Layout>
    </AuthManager>
  );
}
