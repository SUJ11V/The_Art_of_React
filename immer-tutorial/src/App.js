import React, { useRef, useCallback, useState } from 'react';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form], // form에 변화가 있을 경우에 함수 생성
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 새로고침 x
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array에 새 항목 등록
      setData({
        ...data,
        array: data.array.concat(info),
      });

      // form 초기화
      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        // id가 일치하지 않으면 남김
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            // 리스트 항목 클릭 시 onRemove 함수 실행
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
