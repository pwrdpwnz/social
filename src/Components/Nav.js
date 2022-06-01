import React from 'react';

const Nav = () => {
    return (
        <nav className="rightNavbar">
            <ul className="rightNavbar__menu">
                <li className="rightNavbar__items">My Profile</li>
                <li className="rightNavbar__items">My Friends</li>
                <li className="rightNavbar__items">My Photo</li>
                <li className="rightNavbar__items">My Music</li>
                <li className="rightNavbar__items">My Videos</li>
            </ul>
        </nav>
    );
};

export default Nav;