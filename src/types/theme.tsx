/* Theme Enum Type */
export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
    System = 'System',
}

/* Theme Context Type */
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

/**
 * Return the current Theme, will use System as the default theme if no theme is set.
 * 
 * @param { Void } 
 * @returns { Theme } theme: Theme to apply to the application, either default or saved in local storage.
*/
export const getTheme = (): Theme => {
    let currentTheme = Theme.Light;
    if ((localStorage.theme && localStorage.theme === Theme.System) || !localStorage.theme) {
        currentTheme = Theme.System
    } else if (localStorage.theme && localStorage.theme === Theme.Dark) {
        currentTheme = Theme.Dark;
    }
    return currentTheme;
}