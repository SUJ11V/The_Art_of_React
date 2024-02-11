import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        {/* react-router-dom v6에서는 "*"를 사용하여 경로가 다른 하위 경로를 포함할 수 있음을 명시해야 한다. 
            /profiles 경로 아래에 있는 하위 <Routes>를 렌더링하려고 하기 위해 필요 */}
      </Routes>
    </div>
  );
};

export default App;
