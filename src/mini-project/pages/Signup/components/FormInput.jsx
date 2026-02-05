/* @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

const container = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const labelStyle = css`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;
const inputStyle = (e) => css`
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${!!e ? "#ef4444" : "#ddd" };
  border-radius: 6px;
  &:focus {
    outline: none;
    border-color: ${!!e ? "#ef4444" : "#4a90e4" };
  }
  &::placeholder {
    color: #999
  }
`;
const errorMsg = css`
  color: #ef4444;
  font-size: 12px;
`;

export default function FormInput({
  label, type, name, value, ref,
  onChange, onKeyDown, placeholder, error
}) {
  return (
    <div css={container}>
      <label css={labelStyle}>{label}</label> 
      <input 
        css={inputStyle(error)}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
      />
      {error && <div css={errorMsg}>{error}</div>}
    </div>
  )
}
