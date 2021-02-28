import { createContext } from 'react';

export const OptionsListContext = createContext({});

export function OptionsListProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  function toggleDarkMode() {
    setIsDarkTheme(setIsDarkTheme(!isDarkTheme))
  }

  return (
    <OptionsListContext.Provider
      value={{
        isDarkTheme,
        toggleDarkMode
      }}
    >
      {children}
    </OptionsListContext.Provider>
  )


} 