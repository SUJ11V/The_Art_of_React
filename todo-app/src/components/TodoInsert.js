import React from 'react';
// react-icons의 Material Design icons 사용
import { MdAdd } from 'react-icons/md'; // + 아이콘
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
