/* @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const cardSection = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
`;

export const card = css`
  height: 450px;
  overflow: hidden;
`;

export const cardImage = css`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;