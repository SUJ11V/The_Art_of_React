import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 할 일 2500개 생성
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기 -> id값은 렌더링되는 정보가 아니고 새로운 항목을 만들 때 단순 참조하기 때문에 useState말고 useRef 사용
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); // 할 일 목록에 추가
    nextId.current += 1; // id값 1씩 순차적으로 증가
  });

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); // id값을 가져와 id값에 해당되지 않는 값만 남김
    },
    [todos], // todos에 변화가 생겼을 때, 함수 생성
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          // 참이면 todo의 checked를 반전시킴
          // 거짓이면 todo 유지
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos], // todos에 변화가 생겼을 때, 함수 생성
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* 배열을 TodoList에 props로 전달하여 TodoItem으로 변환하여 렌더링 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
