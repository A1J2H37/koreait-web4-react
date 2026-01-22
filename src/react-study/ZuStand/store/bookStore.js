import { create } from "zustand";

export const useCurrentBook = create((set) => {
  return {
    book: {
      title: "",
      author: "",
      price: 0
    },
    // book안에 조작
    // zustand의 setter도 함수형 업데이트 지원
    setNewBook: (newBook) => set({book: newBook}),
    setNewBook2: (newBook) => set(() => {
      return {
        ...preview,
        ...newBook
      }
    })
  }
});