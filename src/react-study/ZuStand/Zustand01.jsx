// npm install zustand
// 원리 -> 자바스크립트(클로저)
// 전역상태관리 리이브러리: Redux(상), Zustand(하), Recoil(사라짐), Zotai(중)
// -> useState와 무관한 상태저장소

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useModalStore } from "./store/modalStore";
import { useToastStore } from "./store/toastStore";

// 의미없이 하위 컴포넌트로 props 전달 -> Props Drilling
export default function Zustand01() {
  // openModal -> 전역상태인
  const { openModal } = useModalStore();
  const {showToast} = useToastStore();
  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={openModal}>모달열기</button>
      <button onClick={() => showToast("Z01에서의 토스트")}>토스트 띄우기</button>
      <Container1 />
    </div>
  );
}

function Container1() {
  return (
    <div>
      C1이 C2호출
      <Container2 />
    </div>
  );
}

function Container2() {
  return (
    <div>
      C2가 C3호출
      <Container3 />
    </div>
  );
}

function Container3() {
  // isModalOpen -> 전역상태
  // closeModal -> isModalOpen의 상태를 false로 만듦
  const { isModalOpen, closeModal } = useModalStore();
  return (
    <div>
      {isModalOpen && (
        <div css={modalOverlay}>
          <div css={modalContent}>
            <h2>MODAL</h2>
            <p>MODAL TEXT</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const modalContent = css`
  width: 60vw;
  height: 50vh;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  /* &: css가 적용된 자기 자신 */
  & > button {
    cursor: pointer;
  }
`;
