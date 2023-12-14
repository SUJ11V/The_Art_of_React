import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  input = React.createRef(); // createRef를 사용해 멤버 변수로 설정

  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value, // state의 password값 업데이트
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000", // validated 값을 검증 결과로 업데이트 (0000이면 true)
    });
    this.input.current.focus(); // input에 focus가 가도록 설정(createRef는 current가 있어야 함!)
  };

  handleEnterClick = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick(); // 버튼 이벤트와 동일한 이벤트가 발생하도록 설정
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange} // onChagne 이벤트 발생 시 handleChange를 호출
          className={
            this.state.clicked
              ? this.state.validated // clicked가 true면, validated의 값에 따라 값 설정
                ? "success"
                : "failure"
              : "" // clicked가 false면, 빈 문자열로 설정
          }
          onKeyDown={this.handleEnterClick} // 편의를 위해 enter 입력 이벤트 추가
          ref={this.input} // ref props
        />
        {/* onClick 이벤트 발생 시 handelButtonClick을 호출 */}
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
