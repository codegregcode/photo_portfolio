import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Title from './Title';
import Index from './Index';
import Mar172024 from './journals/Mar172024';
import Apr272024 from './journals/Apr272024';
import '../styles/app.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/index" element={<Index />} />
        <Route path="/index/a-test-a-start" element={<Mar172024 />} />
        <Route path="/index/porto" element={<Apr272024 />} />
      </Routes>
    </div>
  );
};

export default App;
