import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function ReactQuery02() {
  // useQuery만 사용해서
  // https://jsonplaceholder.typicode.com/users
  // get요청하여 데이터를 map으로 뿌림
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const url = "https://jsonplaceholder.typicode.com/users"
      const response = await axios.get(url)
      return response.data;
    },
    staleTime: 0,
    enabled: true,
    retry: 3,
    gcTime: 5 * 60 * 1000
  })

  if(error) {
    return (
      <h1>{error.message}</h1>
    )
  }

  if(isLoading) {
    return (
      <div>로딩 중...</div>
    )
  }

  return (
    <div>
      <h1>유저목록</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>사용자</th>
            <th>성명</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
