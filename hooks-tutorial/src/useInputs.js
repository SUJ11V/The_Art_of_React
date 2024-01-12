// 기존 useReducer 부분을 따로 분리하여 관리할 수도 있다.
import { useReducer } from "react";

function reducer(state, action) {
  return {
    // state의 모든 속성을 유지하면서 name만 변경하여 새로운 객체 반환
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
