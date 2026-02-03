/* @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import * as s from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

// 전체페이지 레이아웃 구조 정의
export default function MainLayout() {
  // children -> props로 컴포넌트 전달
  // Outlet -> url에 따라 라우팅된 컴포넌트
  return (
    <div css={s.layout}>
      <Header />
      <main css={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
