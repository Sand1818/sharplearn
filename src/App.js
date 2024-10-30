//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Login from './components/Login/LoginPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'; //Ignore red for now- working with error
import Progress from './components/Progress/Progress';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
