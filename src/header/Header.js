import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='' src='https://cdn.pixabay.com/photo/2017/09/19/08/54/eyes-2764597_960_720.jpg'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;