import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import AboutPage from './Components/About';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
