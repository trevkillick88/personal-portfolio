import React, { useState, useEffect, useMemo } from 'react';
import {  getTheme, ThemeStyle, getSystemTheme, ThemeContextType } from './types/theme.tsx';
import { ThemeContext } from './context/theme.tsx';



/**
 * Apply Theme based on the current theme, will convert System to Dark or Light based on the system preference.
 * @param { ThemeStyle } theme - Theme to apply to the application.
 * @returns { void }
 */
const applyTheme = (theme: ThemeStyle) => {
    if (theme === ThemeStyle.System) {
        theme = getSystemTheme();
    }
    const bodyElement = document.getElementsByTagName('body')[0];
    if (theme === ThemeStyle.Dark) {
        bodyElement.classList.add('dark');
    } else {
        bodyElement.classList.remove('dark');
    }
}


/**
 * Context Provider for Theme 
 * @param {React.ReactNode} children - Any React node as child items
 * @returns {ThemeContext.Provider} - Returns the
 */
export function ThemeProvider({ children }: { readonly children: React.ReactNode }):React.ReactElement<ThemeContextType> {
    const [themeStyle, setThemeStyle] = useState<ThemeStyle>(getTheme());

    /* Allow changing of the Theme by consumers, and saving it to local storage and updating state */
    const setTheme = (theme: ThemeStyle) => {
        localStorage.theme = theme;
        setThemeStyle(theme);
    };

    /* Apply Theme on initial render and change of Theme state */
    useEffect(() => {
        applyTheme(themeStyle);
    }, [themeStyle]);

    /* Handle Watching for System Preference changes and the Theme is set to System */
    useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (localStorage.theme === ThemeStyle.System) {
                applyTheme(localStorage.theme);
            }
        };

        mediaQueryList.addEventListener("change", handleChange);
        return () => {
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }, []);

    /* Memoize the value passed to the Context Provider */
    const contextValue = useMemo(
        () => ({
            theme: themeStyle,
            themeStyle,
            setTheme,
        }),
        [themeStyle]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

