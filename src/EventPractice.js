import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    usernname: "",
  };

  handleChange = (e) => {
    this.setState({
      // e.target.name을 활용하여 input이 여러 개지만, 메서드를 여러 개 생성하지 않아도 된다.
      // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 활용된다.
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.usernname + ": " + this.state.message);
    this.setState({
      message: "",
      usernname: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자 명"
          value={this.state.usernname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요 ✍️"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
