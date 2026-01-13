import React, { useState } from "react";

export default function UseState03() {
  const [formData, setFormData] = useState({
    name: "",
    major: "",
  });
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  // 이벤트 속성에
  // 등록된 함수는 첫번째 매개변수에
  // 리액트가 알아서 이벤특객체를 넣어줌

//   const handleNameChange = (e) => {
//     const target = e.target;
//     const value = target.value;
//     setName(value);
//   };

//   const handleMajorChange = (e) => {
//     const target = e.target;
//     const value = target.value;
//     setMajor(value);
//   };

  const handleInputChange = (e) => {
    // name/value 속성 사용
    const {name, value} = e.target;
    // name === "name" -> name Input
    // name === "major" -> major Input
    const newFormData = {
      ...formData, // 기존값 복사
      [name]: value, // 바뀐값만 업데이트
    };
    setFormData(newFormData);
    // input 식별
  };
  return (
    <div>
      <input
        type="text"
        // value에 name을 넣어서
        // 업데이트할때마다 setter로 name을 업데이트해줘야 함
        value={formData.name}
        name="name"
        placeholder="이름입력"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={formData.major}
        name="major"
        placeholder="전공입력"
        onChange={handleInputChange}
      />
      <p>이름:{formData.name} </p>
      <p>전공:{formData.major} </p>
    </div>
  );
}