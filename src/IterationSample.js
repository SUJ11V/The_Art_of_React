import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용한 id

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    // 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열 생성
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId에 +1
    setNames(nextNames); // names 값 업데이트
    setInputText(""); // inputText 비우기
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
