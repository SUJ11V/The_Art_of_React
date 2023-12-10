import React, { Component } from "react";

// 방법 1. constructor를 이용한 방법
// class Counter extends Component {
//   constructor(props) {
//     super(props);

//     // state의 초깃값 설정
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }

// render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
//     return (
//   <div>
//     <h1>{number}</h1>
//     <h2>바뀌지 않는 값: {fixedNumber}</h2>
//     <button
//       // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
//       // 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어 주어야 한다.
//       onClick={() => {
//         // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
//         this.setState({ number: number + 1 });
//       }}
//     >
//       +1
//     </button>
//   </div>
//     );
//   }
// }

// 방법 2
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // sate를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          // 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어 주어야 한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            // setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶으면
            // setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있다.
            this.setState({ number: number + 1 }, () => {
              // setState가 실행되고 난 후 실행
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
