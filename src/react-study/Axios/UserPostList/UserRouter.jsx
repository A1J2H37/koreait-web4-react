import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Axios03 from '../Axios03'
import UserPostList from './UserPostList'

export default function UserRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
        path='/' 
        element={<Axios03 />} 
      />
      <Route
        path='/user/:userId/posts'
        element={<UserPostList />}
      />
    </Routes>
    </BrowserRouter>
  )
}
