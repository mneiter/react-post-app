import React, { Component } from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {  
    return (
        <button {...props} className={classes.myBtn} type="button">
            {children}
        </button>
    )
}

export default MyButton