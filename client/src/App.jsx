import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Workers from './pages/Workers';
import Profile from './pages/Profile';
import './index.css'; 

const App = () => {
  return (
    <div className="app">
      <Header className="header" />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
