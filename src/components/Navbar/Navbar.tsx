import React from 'react';
import './Navbar.module.css';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const setActive = (navData:any) => navData.isActive ? s.activeLink : ''
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;