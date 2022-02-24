import React from 'react';
import classes from './MyButton.module.css';

function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn} type="button">
      {children}
    </button>
  );
}

export default MyButton;
