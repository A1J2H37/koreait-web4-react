/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #fafafa;
  border-bottom: 1px solid #ddd;
`;

export const logo = css`
  margin-right: 40px;
  & > img {
    position: relative;
    top: 3px;
    height: 35px;
    width: auto;
  }
`;

export const nav = css`
  display: flex;
  gap: 30px;
  flex-grow: 1;
`;

export const navLink = css`
  font-size: 16px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #333;
  }
`;

export const userSection = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const myPageLink = css`

`;

export const logoutButton = css`
  font-size: 16px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    color: #333;
  }

  & > svg {
    font-size: 16px;
  }

`;

export const loginLink = css`
  font-size: 16px;
  color: #666;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: #333;
  }

  & > svg {
    font-size: 18px;
  }

`;