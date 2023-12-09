import React from "react";
import PropTypes from "prop-types";

// 방법 1. funcion 키워드를 사용하는 방법
// function MyComponent(props) {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// }

// 방법 2. ()=> {} 화살표 함수를 사용하는 방법
const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 <b>{name}</b>입니다.<br/>
            children 값은 <b>{children}</b>입니다.<br />
            제가 좋아하는 숫자는 <b>{favoriteNumber}</b>
        </div>
    );
};

// name의 기본 값 설정
MyComponent.defaultProps = {
    name: '홍길동'
};

// name은 string type만 오도록
// string 이외의 type의 문자가 들어올 경우, console에 에러 발생
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
};

export default MyComponent;