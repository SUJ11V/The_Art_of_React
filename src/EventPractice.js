import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "", // 초깃값 설정
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // e객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
  // 이벤트가 끝나면 정보가 사라진다. 비동기적으로 이벤트 객체를 참조할 일이 있다면
  // e.persist() 함수를 호출해 주어야 한다.

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "", // 값 초기화
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요 ✍️"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
