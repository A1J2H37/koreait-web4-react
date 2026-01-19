/*
CSS IN JS 라이브러리 - react
"styled-component" vs "Emotion"
1. 라이브러리 설치 -> npm install @emotion/react
2. 확장프로그램 -> vscode-styled-components
*/

// 1. jsx 태그에 css 속성 부여
/* @jsxImportSource @emotion/react */

// 2. cs 객체를 만들기 편하게 만들어 놓았음
import {css} from "@emotion/react"
const box1 = css`
    width: 100px;
    height: 100px;
    background-color: #eee;
    color: azure;
    `; // css 객체 생성

// css 객체를 리턴하는 함수로 사용 가능
const box2 = () => css`
    width: 100px;
    height: 100px;
    background-color: #eee;
    color: azure;
`;

import * as s from "./Styles";

export default function Emotion01() {
  return (
    <div css={s.layout}>
        <div css={box1}>박스1</div>
        <div css={box2()}>박스2</div>
        <div css={s.box3}>박스3</div>
    </div>
  )
}
