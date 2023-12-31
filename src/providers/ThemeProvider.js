import ThemeContext from '../contexts/ThemeContext';
import React, { useState } from 'react';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {setTheme(theme === 'dark' ? 'light' : 'dark');}
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
