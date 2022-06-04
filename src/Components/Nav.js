import React from 'react';
import navStyle from './Nav.module.scss'
import '../Styles/App.scss'

let per1 = navStyle.active;
let per2 = navStyle.navLinks;

let x = `$per1 + $per2`

const Nav = () => {
    return (
        <nav className={navStyle.rightNavbar}>
            <ul className={navStyle.rightNavbar__menu}>
                <li className={navStyle.rightNavbar__items}>
                    <a href="#" className={ `${per1} ${per2}` }>My Profile</a>
                </li>
                <li className={navStyle.rightNavbar__items}>My Friends</li>
                <li className={navStyle.rightNavbar__items}>My Photo</li>
                <li className={navStyle.rightNavbar__items}>My Music</li>
                <li className={navStyle.rightNavbar__items}>My Videos</li>
            </ul>
        </nav>
    );
};

export default Nav;