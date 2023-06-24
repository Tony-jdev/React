import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/counter'>Counter</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/films'>Films</NavLink>

            <LightModeIcon />
        </header>
    );
}

export default Header;
