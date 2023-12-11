import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
};

return (
  <div>
    <h1>이벤트 연습 - 함수형 컴포넌트</h1>
    <input
      type="text"
      name="username"
      placeholder="사용자명"
      value={username}
      onChange={onChangeUsername}
    />
    <input
      type="text"
      name="message"
      placeholder="텍스트를 입력해 보세요"
      value={message}
      onChange={onChangeMessage}
    />
    <button onClick={onClick}>확인</button>
  </div>
);

export default EventPractice;
