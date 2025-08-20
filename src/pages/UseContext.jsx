import React, { createContext, useState, useContext } from 'react';

//create context
const ThemeContext = createContext();

//create provider

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h2>Current Theme:{theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}


const UseContext = () => {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    )
}

export default UseContext