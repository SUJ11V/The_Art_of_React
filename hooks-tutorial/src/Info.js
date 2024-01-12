import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "", // 기본 값 공백으로 설정
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        {/* e.target을 사용하기 때문에 name 속성을 적어줘야 함! */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
