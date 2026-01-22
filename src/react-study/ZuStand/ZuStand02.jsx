import React, { useState } from 'react'
import { useCurrentBook } from './store/bookStore';

export default function ZuStand02() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: 0
  });
  const {setNewBook} = useCurrentBook();

  const handleChange = (e) => {
    let {name, value} = e.target;
    setForm((prev) => {
      if (name === "price") {
        value = parseInt(value)
      }
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = () => {
    setNewBook({...form})

    setForm({
      title: "",
      author: "",
      price: 0
    });
  }
  return (
    <div>
      <h2>책 정보 입력</h2>
      <input 
      type="text"
      name="title"
      placeholder='책제목'
      onChange={handleChange}
      value = {form.title} 
      />
      <input 
      type="text"
      name="author"
      placeholder='저자'
      onChange={handleChange}
      value = {form.author} 
      />
      <input 
      type="number"
      name="price"
      placeholder='가격'
      onChange={handleChange}
      value = {form.price} 
      />
      <button onClick={handleSubmit}>입력완료</button>
      <ShowBook />
    </div>
  )
}

function ShowBook() {
  const {book} = useCurrentBook();
  return (
    <div>
      <h3>현재 책 정보</h3>
      <p>제목: {book.title}</p>
      <p>저자: {book.author}</p>
      <p>가격: {book.price}원</p>
    </div>
  )
}