import { createContext, useContext } from 'react';
import { getTheme, ThemeContextType } from '../types/theme';


/* Context for Theme */
export const ThemeContext = createContext<ThemeContextType>({ theme: getTheme(), setTheme: () => { } });
export const useTheme = () => useContext(ThemeContext);
