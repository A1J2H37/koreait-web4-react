import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    padding: 40px 20px;
`;

export const myPageBox = css`
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

// 프로필 섹션
export const profileSection = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const imgWrapper = css`
    flex-shrink: 0;
`;

export const imageBox = css`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 3px solid #eee;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: default;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const imageBoxEditable = css`
    cursor: pointer;

    &:hover {
        border-color: #aaa;
        transform: translateY(-2px);
    }
`;

export const imgPlaceholder = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-size: 64px;
    font-weight: 700;
    color: #ffffff;
`;

export const helloCard = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`;

export const usernameLine = css`
    display: flex;
    align-items: baseline;
`;

export const username = css`
    font-size: 120px;
    font-weight: 600;
    color: #333;
    line-height: 1;
    letter-spacing: -15px;
`;

export const nim = css`
    font-size: 32px;
    font-weight: 600;
    color: #333;
`;

export const helloText = css`
    font-size: 32px;
    font-weight: 400;
    color: #333;
    line-height: 1.3;
    text-align: right;
`;

// 폼 섹션
export const formSection = css`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

// 파일업로드 input은 보통 감춰둔다.
export const hiddenInput = css`
    display: none;
`;

export const loadingBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 400px;
`;

export const loadingText = css`
  font-size: 18px;
  color: #666;
  font-weight: 500;
`;