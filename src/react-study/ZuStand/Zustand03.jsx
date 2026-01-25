import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useSurveyStore } from "./store/surveyStore";

export default function Zustand03() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/step2" />
        <Route path="/step3" />
      </Routes>
    </BrowserRouter>
  );
}

function Step1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigator = useNavigate();
  const { setSurveyInfo } = useSurveyStore();

  const handleNext = () => {
    // 전역상태에 있는
    const myUpdateData = {
      name: name,
      age: age,
      gender: gender,
    };
    setSurveyInfo(myUpdateData);
    navigator("/step2");
  };

  return (
    <div>
      <div>
        <h2>레스토랑 설문</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="나이"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">성별선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
        <button onClick={handleNext}>다음</button>
      </div>
    </div>
  );
}

function Step2() {
  const navigator = useNavigate();
  const [satisfaction, setSatisfaction] = useState("");
  const [recommend, setRecommend] = useState("");
  const [email, setEmail] = useState("");
  const {setSurveyInfo} = useSurveyStore();

  const handleSubmit = () => {
    if (satisfaction && recommend && email) {
      alert("제출 완료");
    }
    const data = {
      "satisfaction": satisfaction,
      "recommend": recommend,
      "email":email
    }
    setSurveyInfo(data);
  }

  const scores = [
    <option>선택하세요</option>,
    <option key="1" value="1">
      1
    </option>,
    <option key="2" value="2">
      2
    </option>,
    <option key="3" value="3">
      3
    </option>,
    <option key="4" value="4">
      4
    </option>,
    <option key="5" value="5">
      5
    </option>,
  ];

  return (
    <div>
      <div>
        <h2>만족도 조사</h2>
        <div>
          <label>전체적인 만족도</label>
          <select
            value={satisfaction}
            onChange={(e) => setSatisfaction(e.target.value)}
          >
            {scores}
          </select>
        </div>
        <div>
          <label>추천 의향</label>
          <select
            value={recommend}
            onChange={(e) => setRecommend(e.target.value)}
          >
            {scores}
          </select>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일입력"
          />
        </div>
      </div>
    </div>
  );
}
