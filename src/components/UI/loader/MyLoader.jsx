import React from 'react';
import cl from './MyLoader.module.css';

function MyLoader() {
  return (
    <div className={cl.loader}>Data is loading ...</div>
  );
}

export default MyLoader;
