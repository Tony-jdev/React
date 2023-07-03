    import React, { useContext } from 'react';
    import { NavLink } from 'react-router-dom';
    import './Header.css';
    import LightModeIcon from '@mui/icons-material/LightMode';
    import DarkModeIcon from '@mui/icons-material/DarkMode';
    import { pink } from '@mui/material/colors';
    import ThemeContext from '../../contexts/ThemeContext';
    import { FavoritesContext } from '../../contexts/FavoritesContext';
    import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

    const Header = () => {
        const { theme, toggleTheme } = useContext(ThemeContext);
        const { favorites } = useContext(FavoritesContext);

        return (
            <header className={theme}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/counter'>Counter</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/films'>Films</NavLink>
                <NavLink to='/counters'>Counters</NavLink>

                <div className="favorites">
                    <FavoriteBorderIcon className="favorite-icon" />
                    <span className="favorite-count">{favorites.length}</span>
                </div>
                {theme === 'dark' ? <LightModeIcon onClick={toggleTheme} sx={{ color: pink[500] }} /> : <DarkModeIcon onClick={toggleTheme} />}
            </header>
        );
    }

    export default Header;
