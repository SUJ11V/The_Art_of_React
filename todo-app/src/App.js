import React, { useReducer, useRef, useCallback } from 'react';
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

// useReducer를 사용하면 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있다.
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수 호출
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기 -> id값은 렌더링되는 정보가 아니고 새로운 항목을 만들 때 단순 참조하기 때문에 useState말고 useRef 사용
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // id값 1씩 순차적으로 증가
  });

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* 배열을 TodoList에 props로 전달하여 TodoItem으로 변환하여 렌더링 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
