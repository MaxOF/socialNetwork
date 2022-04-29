import React from "react";
import {NavLink} from "react-router-dom";

import s from './Navbar.module.css';

const Navbar: React.FC<{}> = () => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}>
                <NavLink to='/profile' className={(navDate) =>
                    navDate.isActive ? s.active : ''}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={(navDate) =>
                    navDate.isActive ? s.active : ''}>Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={(navDate) =>
                    navDate.isActive ? s.active : ''}>Users
                </NavLink>
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