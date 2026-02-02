import {css} from "@emotion/react"

export const layout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

// 헤더/푸터 제와한 공간 모두 차지
export const main = css`
  flex-grow: 1;
  overflow: auto;
  padding-left: 16px;
  background-color: #f5f5f5;
`;