import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = ()=>{
    return(
        <div className={`container-fluid ${s.header__wrapper}`}>
            <div className={`container`}>
                <nav className={`${s.header__nav}`}>
                    <NavLink to='/' className={`${s.header__nav_item}`}>Users</NavLink>
                    <NavLink to='/albums' className={`${s.header__nav_item}`}>Albums</NavLink>
                    <NavLink to='/photos' className={`${s.header__nav_item}`}>Photos</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header