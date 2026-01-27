import axios from "axios";
import { useEffect, useState } from "react";
import { getUsersApi } from "./apis/studyApi";
/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Axios03() {
  // api를 import해서 함수들을
  // return에 렌디링
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  const getUsers = async () => {
    const res = await getUsersApi();
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const cardStyle = css`
    border: 1px solid #dbdbdb;
    width: 250px;
    padding: 15px;
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  `;
  const handleUserClick = (userId) => {
    // /user/:userId/posts
    const path = `/user/${userId}/posts`;
    navigator(path);
  };

  return (
    <div>
      <h2>사용자 목록</h2>
      {/* 
      아래의 div카드라고 생각하고
      서버에서 받아온 데이터를 map으로 렌더링
      */}
      {users.map((u) => {
        const { name, username, id, email } = u;
        return (
          <div 
            key={id}
            css={cardStyle}
            onClick={() => handleUserClick(id)}
          >
            <h3>이름: {name}</h3>
            <p>아이디: {username}</p>
            <p>이메일: {email}</p>
          </div>
        );
      })}
    </div>
  );
}
