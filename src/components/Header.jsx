import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Top</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;
