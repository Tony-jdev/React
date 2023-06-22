import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/counter'>Counter</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/films'>Films</NavLink>
        </header>
    );
}

export default Header;
