<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import cl from './MyNav.module.css';

function MyNav() {
  return (
    <div className={cl.navbar}>
=======
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyGreeting from '../greeting/MyGreeting';
import cl from './MyNav.module.css';

function MyNav() {
  // eslint-disable-next-line no-unused-vars
  const { authUser } = useContext(AuthContext);
  return (
    <div className={cl.navbar}>
      <MyGreeting />
>>>>>>> develop
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
