/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useToastStore } from './store/toastStore';

const toastStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #777;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  opacity: 0.8;
`

export default function myToast() {
  const {isVisible, hideToast, message} = useToastStore();
  useEffect(() => {
      if (isVisible) {
      const timer = setTimeout(() => {
        // 전역상태 false
        hideToast()
      }, 2500)
  
      return () => clearTimeout(timer)
    }
    }, [isVisible])

  if (!isVisible) {
    return null;
  }

  return (
    // 메세지도 전역으로 관리
    <div css={toastStyle}>{message}</div>
  )
}
