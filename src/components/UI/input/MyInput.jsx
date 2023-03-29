import React from 'react'
import classes from './MyInput.module.css'

// оборачиваем React.forwardRef чтобы можно было реф ссылку передать дальше
const MyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} className={classes.myInput} {...props} />
})

export default MyInput
