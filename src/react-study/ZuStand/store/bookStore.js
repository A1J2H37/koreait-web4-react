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

export const useBookList = create((set) => {
  return {
    // R
    books: [{
      id: "1",
      title: "젖줒잦",
      author: "홍길동",
      price: "25000"
    }],

    // C - add
    addBook: (book) => set((prev) => {
      return {
        ...prev,
        // spread로 없던 id key 추가
        books: [...prev.books, {...book, id: Date.now()}]
      }
    }),
    
    // U - update
    updateBook: (id, updatePrice) => set((prev) => {
      return {
        ...prev,
        // map(), filter() -> 새로운 []를 리턴
        books: prev.books.map((book) => {
          return book.id === id ? {...book, "price": updatePrice}: book
        })
      }
    }),

    // D - delete
    // 내가 전달한거 빼고 나머지만
    removeBook: () => set((prev) => {
      return {
        ...prev,
        books: prev.books.filter((book) => book.id !== id)
      }
    })

  }
})