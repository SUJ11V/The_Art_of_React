import React, { useState } from "react";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* 컴포넌트의 가시성 설정 */}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
