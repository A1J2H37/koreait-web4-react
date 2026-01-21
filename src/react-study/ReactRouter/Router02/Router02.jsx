// useParam

import { BrowserRouter, Route, Routes, useParams, Link } from "react-router-dom";

// url 경로에서 값을 추출하는 hook
export default function Router02() {
  return (
    <BrowserRouter>
      <Routes>
        {/* :id -> 나중에 useParams의 key값이 id가 됨 */}
        <Route path="/user/:id/:name" element={<UserDetail />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

// url에 정보를 담는경우
function UserDetail() {
  const { id, name } = useParams(); // url에서 id, name추출

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>사용자 ID: {id}</p>
      <p>사용자 명: {name}</p>
      <Link to="/">목록으로</Link>
    </div>
  );
}

function UserList() {
  // 외부에서 받아온 데이터
  const users = [
    {id: 1, name:"김철수"},
    {id: 2, name:"박철수"},
    {id: 3, name:"이철수"},
  ]

  return (
    <div>
      <h2>구독자 목록</h2>
      {users.map((user) => {
        const {id, name} = user;
        return (
          <div key={id}>
            {/* id정보를 url로 전달 */}
            <Link to={`/user/${id}/${name}`}>{name}</Link>
          </div>
        )
      })}
    </div>
  )
}
