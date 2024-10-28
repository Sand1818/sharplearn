///import logo from './logo.svg';
///import './App.css';
import Login from './components/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {
        /*<Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
