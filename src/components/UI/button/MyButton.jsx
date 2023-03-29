import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
    return (
        //все пропсы передаем в саму кнопку, например disabled
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton
