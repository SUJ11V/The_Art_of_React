import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // asynx: 프라미스 반환
  const onClick = async () => {
    try {
      // await: 프라미스가 처리될 때까지 대기
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      ); // 가짜 API 호출
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          // 객체를 JSON 형식으로 표시
          // 두 번째 매개변수: 문자열에 포함될 값 지정
          // 세 번째 매개변수: 공백 설정
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
