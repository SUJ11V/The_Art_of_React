import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

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
      setForm(
        // 첫 번째 파라미터: 수정하고 싶은 상태
        // 두 번째 파라미터: 상태를 어떻게 업데이트할지 정의하는 함수
        produce(form, (draft) => {
          draft[name] = value;
        }),
      );
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
      setData(
        // immer를 사용할 땐 직접적인 영향을 미치는 push, splice 등의 함수를 사용해도 무방하다.
        produce(data, (draft) => {
          draft.array.push(info);
        }),
      );

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
      setData(
        // 이 경우 배열 내장 함수인 filter를 쓰는 것이 코드가 더 깔끔함
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1,
          );
        }),
      );
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
