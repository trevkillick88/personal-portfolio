/* Theme Enum Type */
export enum ThemeStyle {
    Dark = 'Dark',
    Light = 'Light',
    System = 'System',
}

/* Theme Context Type */
export type ThemeContextType = {
    theme: ThemeStyle;
    setTheme: (theme: ThemeStyle) => void;
}

/**
 * Return the current Theme, will use System as the default theme if no theme is set.
 * @returns { ThemeStyle } theme: Theme to apply to the application, either default or saved in local storage.
 */
export const getTheme = (): ThemeStyle => {
    let currentTheme = ThemeStyle.Light;
    if ((localStorage.theme && localStorage.theme === ThemeStyle.System) || !localStorage.theme) {
        currentTheme = ThemeStyle.System
    } else if (localStorage.theme && localStorage.theme === ThemeStyle.Dark) {
        currentTheme = ThemeStyle.Dark;
    }
    return currentTheme;
}
/**
 * Return the current system Theme preference, Light or Dark.
 * @returns { ThemeStyle } theme: Theme to apply to the application, Either Light or Dark.
 */
export const getSystemTheme = (): ThemeStyle => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return ThemeStyle.Dark;
    }
    return ThemeStyle.Light;
}
/**
 * True or false value to determine if the theme is dark.
 * @returns { boolean } isDark: Boolean value to determine if the theme is dark.}
 */
export const isDark = (): boolean => {
    let theme = getTheme();
    if (theme === ThemeStyle.System) {
        theme = getSystemTheme();
    }
    if (theme === ThemeStyle.Dark) {
       return true;
    } 
    return false;
}