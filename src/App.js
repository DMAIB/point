import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import './App.css'; // Убедитесь, что вы импортировали стили

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/"className="hidden">Main</Link>
        <Link to="/login" className="hidden">Login</Link>
        <Link to="/register" className="hidden">Register</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;