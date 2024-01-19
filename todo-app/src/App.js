import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기 -> id값은 렌더링되는 정보가 아니고 새로운 항목을 만들 때 단순 참조하기 때문에 useState말고 useRef 사용
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); // 할 일 목록에 추가
    nextId.current += 1; // id값 1씩 순차적으로 증가
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* 배열을 TodoList에 props로 전달하여 TodoItem으로 변환하여 렌더링 */}
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
