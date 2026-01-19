// js파일로 CSS in JS 코드부분을 분리
import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const box3 = css`
    width: 100px;
    height: 300px;
    background-color: #ddd;
`;