//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Login from './components/Login/LoginPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home'
import Progress from './components/Progress/Progress';
import Planner from './components/Planner/Planner';
import Resources from './components/Resources/Resources';
import LandingPage from './components/Landing/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
