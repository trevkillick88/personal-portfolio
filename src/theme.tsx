import React, { useState, useEffect } from 'react';
import {  getTheme, Theme } from './types/theme.tsx';
import { ThemeContext } from './context/theme.tsx';

/**
 * Return the current system Theme preference, Light or Dark.
 * 
 * @param { Void } 
 * @returns { Theme } theme: Theme to apply to the application, Either Light or Dark.
 */
const getSystemTheme = (): Theme => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return Theme.Dark;
    }
    return Theme.Light;
}

/**
 * Apply Theme based on the current theme, will convert System to Dark or Light based on the system preference.
 * 
 * @param { Theme } theme: Theme to apply to the application.
 * @returns { void }
 */
const applyTheme = (theme: Theme) => {
    if (theme === Theme.System) {
        theme = getSystemTheme();
    }
    const bodyElement = document.getElementsByTagName('body')[0];
    if (theme === Theme.Dark) {
        bodyElement.classList.add('dark');
    } else {
        bodyElement.classList.remove('dark');
    }
}


/* Context Provider for Theme */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(getTheme());

    /* Allow changing of the Theme by consumers, and saving it to local storage and updating state */
    const setTheme = (theme: Theme) => {
        localStorage.theme = theme;
        setThemeState(theme);
    };

    /* Apply Theme on initial render and change of Theme state */
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    /* Handle Watching for System Prefrence changes and the Theme is set to System*/
    useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (localStorage.theme === Theme.System) {
                applyTheme(localStorage.theme);
            }
        };

        mediaQueryList.addEventListener('change', handleChange);
        return () => {
            mediaQueryList.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

