import React from 'react';
import navStyle from './Nav.module.scss'
import '../../Styles/App.module.scss'

let per1 = navStyle.active;
let per2 = navStyle.navLinks;


const Nav = () => {
    return (
        <nav className={navStyle.rightNavbar}>
            <ul className={navStyle.rightNavbar__menu}>
                <li className={navStyle.rightNavbar__items}>
                    <a href="my-app/src/Components/Nav/Nav#" className={ `${per1} ${per2}` }>My Profile</a>
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