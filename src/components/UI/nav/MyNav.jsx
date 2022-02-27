import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MyNav.module.css';

function MyNav() {
  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/login">Login</Link>
        <Link to="/error">Error</Link>
      </div>
    </div>
  );
}

export default MyNav;
