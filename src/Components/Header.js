import React from 'react';
import logo from '../Images/cooker.svg'
import '../Styles/App.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="" className="header__image"/>
            <ul className="header__menu">
                <li className="header__menu-list">Home</li>
                <li className="header__menu-list">Music</li>
                <li className="header__menu-list">Videos</li>
                <li className="header__menu-list">Settings</li>
            </ul>
        </header>
    );
};

export default Header;