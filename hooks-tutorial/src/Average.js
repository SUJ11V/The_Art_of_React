import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]); // 초기 설정을 빈 배열로 설정
  const [number, setNumber] = useState(""); // 초기 설정을 공백으로 설정

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  // 등록 버튼을 누르면 리스트에 값이 추가됨
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  // useMemo를 이용하여 list의 값이 바뀌었을 때만 getAvergae를 실행
  // list의 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  // 즉, list에 새로운 값이 추가됐을 때만 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* map 함수를 이용하여 list에 li 태그 부여 
            '() => ()'의 형태로 해야 결과값이 바로 반환됨 */}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
