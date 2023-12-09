import React from "react";
import MyComponent from "./MyComponent";

// 방법 1. function 키워드를 사용하는 방법
// function App() {
//   return <MyComponent name="이수진" />;
// }


// 방법 2. 화살표 함수를 사용하는 방법
const App = () => {
  return (
    <MyComponent name="수진" favoriteNumber={2}>
      리액트
    </MyComponent>
  );
};

export default App;
