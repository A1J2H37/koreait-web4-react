/* @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const signinBox = css`
  width: 450px;
  padding: 50px 40px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid #eee;
`;
export const logoBox = css`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
export const logo = css`
width: 70px;
`;
export const title = css`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  font-size: 28px;
  cursor: default;
`;
export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const inputBox = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > label {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    cursor: default;
  }

  & > input {
    padding: 12px 16px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
    
    &:focus {
      outline: none;
      border-color: #2d80e5;
    }
      
    &::placeholder {
      color: #aaa;
    }
  }
`;
export const btn = css`
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  background-color: #2d80e5;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  margin-top: 10px;

  &:hover {
    background-color: #1b76e5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const signupTextBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
export const signupText = css`
  color: #333;
  font-size: 14px;
  cursor: default;
`;
export const signupLink = css`
  text-decoration: none;
  font-size: 14px;
  color: #1b76e5;
`;