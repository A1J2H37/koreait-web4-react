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
  flex-basis: 20%; // 정렬된 상태에서 공간 점유 20%
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    transform: translateY(-8px);
  }
`;

export const cardImage = css`
  object-fit: cover; // 요소 크기만큼 보여짐
  object-position: center; // 아지미 center로 기준 변경
  width: 100%;
  height: 100%;
`;