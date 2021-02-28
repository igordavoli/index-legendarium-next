import { useState, createContext } from 'react';

export const ThemesContext = createContext({});

export function ThemeStore({ children }) {
  const [theme, setTheme] = useState('light');
  const switchTheme = (theme) => setTheme(theme)

  return (
    <ThemesContext.Provider value={{ switchTheme, theme }} >
      {children}
    </ThemesContext.Provider>)
}