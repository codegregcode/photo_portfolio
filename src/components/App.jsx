import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Title from './Title';
import '../styles/app.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Title />} />
      </Routes>
    </div>
  );
};

export default App;
