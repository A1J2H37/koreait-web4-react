/* @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

export const container =css`
  width: 100%;
  // 부모 크기보다 커질 수 있음
  // 최소크기를 부모크기로
  // 스크롤바로 전체컨텐츠 보려고
  min-height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  padding: 40px 0;
`;
export const signupBox =css`
  width: 450px;
  padding: 30px 40px;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
`;
export const logoBox =css`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const logo =css`
  width: 60px;
  height: 60px;
`;
export const title =css`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 25px;
`;
export const formbox =css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  `;
export const btn =css`
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  background-color: #4999fc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2787fc;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const linkBox =css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
`;
export const linkText =css`
  font-size: 14px;
  color: #333;
`;
export const link =css`
  font-size: 14px;
  color: #1e76e3;
  text-decoration: none;
  &:hover {
    color: #165bb0;
  }
`;