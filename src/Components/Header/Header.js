import React from 'react';
import logo from '../../Images/cooker.svg'
import headerStyle from './Header.module.scss'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img src={logo} alt="" className={headerStyle.header__image}/>
            <ul className={headerStyle.header__menu}>
                <li className={headerStyle.header__menu_list}>Home</li>
                <li className={headerStyle.header__menu_list}>Music</li>
                <li className={headerStyle.header__menu_list}>Videos</li>
                <li className={headerStyle.header__menu_list}>Settings</li>
            </ul>
        </header>
    );
};

export default Header;