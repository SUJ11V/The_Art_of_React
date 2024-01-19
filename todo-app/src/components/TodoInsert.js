import React, { useState, useCallback } from 'react';
// react-icons의 Material Design icons 사용
import { MdAdd } from 'react-icons/md'; // + 아이콘
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // useCallback을 사용하여 컴포넌트가 리렌더링될 때마다 함수를 새로 생성 x. 함수 재사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); // 처음 렌더링될 때 한 번만 생성

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위해 아래 함수 호출 (새로고침되면 추가한 데이터는 날라감)
      e.preventDefault();
    },
    [onInsert, value], // onIsert와 value에 변화가 있을 때 호출되도록 설정
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
