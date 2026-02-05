// App.jsx대신
// 프로젝트 진입 컴포넌트

/* @jsxImportSource @emotion/react */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// 전역 스타일 초기화
const globalStyle = css`
  /* 모든 태그 초기화 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* index.html의 body */
  body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #root {
  /* index.html에 있는 id=root div */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const queryClient = new QueryClient();
// 전역 토스트 라이브러리
// npm install react-toastify

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      <ToastContainer 
        position="top-right"
        theme="light"
        autoClose={2500}
        closeOnClick
        pauseOnHover
        newestOnTop
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
