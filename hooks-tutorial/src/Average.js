import React, { useState, useMemo, useCallback, useRef } from "react";

// useMemo는 숫자, 문자열, 객체와 같은 일반 값을 재사용할 때 사용
// useCallback은 함수를 재사용할 때 사용

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]); // 초기 설정을 빈 배열로 설정
  const [number, setNumber] = useState(""); // 초기 설정을 공백으로 설정
  const inputEl = useRef(null);

  // useCallback을 사용하지 않았을 땐 리렌더링될 때마다 함수가 새로 생성됐었음
  // useCallback의 첫 번째 파라미터: 생성하고 싶은 함수
  // 두 번째 파라미터: 배열. 어떤 값이 바뀌었을 때 함수를 새로 생성하는 지 명시
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성(기존 값을 조회할 필요 없기 때문)

  // 등록 버튼을 누르면 리스트에 값이 추가됨
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus(); // focus가 input으로 가도록 설정
    },
    [number, list] // number 혹은 list가 바뀌었을 때만 함수 생성
  );

  // useMemo를 이용하여 list의 값이 바뀌었을 때만 getAvergae를 실행
  // list의 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
  // 즉, list에 새로운 값이 추가됐을 때만 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      {/* input에 접근하기 위해 useRef 사용 */}
      <input value={number} onChange={onChange} ref={inputEl} />
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
