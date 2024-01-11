import React, { useReducer } from "react";

// reducer: 현재 상태와 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태로 변환하는 함수
function reducer(state, action) {
  // acion, type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // useReducer의 첫 번째 파라미터: reducer 함수
  // useReducer의 두 번째 파라미터: 해당 reducer의 기본값
  // state: 현재 가리키고 있는 상태
  // dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* 함수 안에 파라미터로 액션 값을 넣어주면 reducer 함수가 호출되는 구조 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
