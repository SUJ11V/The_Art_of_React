import React, { Component } from "react";
import PropTypes from "prop-types";

// 방법 1
// class MyComponent extends Component {
//   render() {
//     const {name, favoriteNumber, children} = this.props; // 비구조화 할당
//     return (
//       <div>
//         안녕하세요, 제 이름은 <b>{name}</b>입니다.
//         <br />
//         children 값은 <b>{children}</b>입니다.
//         <br />
//         제가 좋아하는 숫자는 <b>{favoriteNumber}</b>
//       </div>
//     );
//   }
// }

// MyComponent.defaultProps = {
//   name: "홍길동",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// 방법 2
class MyComponent extends Component {
  static defaultProps = {
    name: "홍길동",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 <b>{name}</b>입니다.
        <br />
        children 값은 <b>{children}</b>입니다.
        <br />
        제가 좋아하는 숫자는 <b>{favoriteNumber}</b>
      </div>
    );
  }
}

export default MyComponent;
