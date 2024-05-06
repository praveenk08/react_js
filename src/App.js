
import React from 'react';
import Home from './pages/Home';
import LoginRegister from './pages/loginRegister';
import { render, screen } from '@testing-library/react';
// import './style.css';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <LoginRegister/>
    </div>
  );
}

export default App;
