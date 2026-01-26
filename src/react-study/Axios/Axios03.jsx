import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUserApi } from "./apis/studyApi";

export default function Axios03() {
  // api를 import해서 함수들을
  // return에 렌디링
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await getUserApi();
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
    getUsers();
  }, []);

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
          <div key={id}>
            <h3>이름: {name}</h3>
            <p>아이디: {username}</p>
            <p>이메일: {email}</p>
          </div>
        );
      })}
    </div>
  );
}
