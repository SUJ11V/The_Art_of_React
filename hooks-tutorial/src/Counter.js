import React, { useState } from "react";

const Counter = () => {
  // 기본값 0으로 설정
  // useState 함수는 호출되면 배열을 반환 -> 1번째 원소: 상태값, 2번째 원소: 상태를 설정하는 함수
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
