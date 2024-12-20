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
/**
 * Return the current system Theme preference, Light or Dark.
 * 
 * @param { Void } 
 * @returns { Theme } theme: Theme to apply to the application, Either Light or Dark.
 */
export const getSystemTheme = (): Theme => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return Theme.Dark;
    }
    return Theme.Light;
}
/**
 * True or false value to determine if the theme is dark.
 * 
 * @param { void } 
 * @returns { boolean } isDark: Boolean value to determine if the theme is dark.}
 */
export const isDark = (): boolean => {
    let theme = getTheme();
    if (theme === Theme.System) {
        theme = getSystemTheme();
    }
    if (theme === Theme.Dark) {
       return true;
    } 
    return false;
}