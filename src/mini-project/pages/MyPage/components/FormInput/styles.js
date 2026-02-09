/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const inputGroup = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const label = css`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;

export const input = (isEditMode) => css`
    width: 100%;
    height: 52px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: ${isEditMode ? "#f5f5f5" : "#fafafa"};
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: ${isEditMode ? "#333" : "#999"};
    transition: all 0.2s ease;
    cursor: ${isEditMode ? "default" : "not-allowed"};

    &:focus {
        outline: none;
        border-color: ${isEditMode ? "#ddd" : "#4a90e2"};
        background-color: #ffffff;
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const changePasswordButton = css`
    width: 100%;
    height: 52px;
    border: 1px solid #4a90e2;
    border-radius: 8px;
    background-color: #ffffff;
    color: #4a90e2;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 8px;

    &:hover {
        background-color: #f0f7ff;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const buttonGroup = css`
    display: flex;
    gap: 12px;
    margin-top: 8px;
`;

export const editButton = css`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #4a90e2;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 8px;

    &:hover {
        background-color: #357abd;
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const cancelButton = css`
    flex: 1;
    height: 52px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #ffffff;
    color: #666;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f5f5f5;
        border-color: #999;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const saveButton = css`
    flex: 1;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #4a90e2;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #357abd;
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const errorMessage = css`
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
`;