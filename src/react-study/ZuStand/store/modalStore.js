import { create } from "zustand";

// create() => 전역 저장소를 리턴받을 수 있음
// -> App 어디서든 전근가능함

// 1. create함수는 매개변수로 콜백함수를 받음
// 2. 이 콜백함수에는 Zustand가 
// 1변째 매개변수 자리에 setter를 넣어줌
// 3. setter는 이 create함수가 리턴하는 객체에 대한 setter
// 4. 저장하고 싶은 상태나 메서드 등을 key-value형태로 갹체에 정의하면
// 5. import하는 즉시 해당 key로 value를 훅형태로 
// 받아서 사용할 수 있음
export const useModalStore = create((set) => {
  return {
    isModalOpen: false,
    openModal: () => set({isModalOpen: true}),
    closeModal: () => set({isModalOpen: false})
  }
  // set은 리턴값이 js객체를
  // {...prev, key: value}로 조작하여 대입해주는 역할
});