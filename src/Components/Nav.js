import React from 'react';
import navStyle from './Nav.module.scss'
import '../Styles/App.scss'

const Nav = () => {
    return (
        <nav className={navStyle.rightNavbar}>
            <ul className={navStyle.rightNavbar__menu}>
                <li className={navStyle.rightNavbar__items}>My Profile</li>
                <li className={navStyle.rightNavbar__items}>My Friends</li>
                <li className={navStyle.rightNavbar__items}>My Photo</li>
                <li className={navStyle.rightNavbar__items}>My Music</li>
                <li className={navStyle.rightNavbar__items}>My Videos</li>
            </ul>
        </nav>
    );
};

export default Nav;