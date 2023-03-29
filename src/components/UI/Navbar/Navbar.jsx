import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
            <div className='navbar__links'>
                <NavLink className='navbar__links' to='/about'>
                    О себе
                </NavLink>
                <NavLink className='navbar__links' to='/posts'>
                    Посты
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
