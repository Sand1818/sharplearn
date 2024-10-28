import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <img src="profile-icon.png" alt="User Profile" className="profile-icon" />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </header>
  );
}

export default Header;
