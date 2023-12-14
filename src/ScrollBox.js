import React, { Component } from "react";

class ScrollBox extends Component {
  // 비구조화 할당 문법 사용
  scrollToBottom = () => {
    // scrollHeight : box 안의 div 높이
    // clientHeight : box의 높이
    const { scrollHeight, clientHeight } = this.box;
    /* 위 코드는 다음과 같은 의미
     * const scrollHeight = this.box.scrollHeight;
     * const clientHeight = this.box.clientHeight;
     */

    // scrollTop : 스크롤바의 위치
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto", // 설정한 길이를 넘으면 스크롤 생성
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)", // 흰색에서 검은색으로 선형 그라데이션
    };

    return (
      <div
        style={style}
        // 최상위 DOM에 ref 달기 (= 컴포넌트 외부에서 사용하기 위해서)
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
