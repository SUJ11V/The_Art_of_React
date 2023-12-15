import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  // 고유한 값이 없을 때만 index 값을 key로 사용
  // 이유: index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
