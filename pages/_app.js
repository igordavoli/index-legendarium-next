import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "../src/styles/Globals";
import { OptionsListContext } from '../src/contexts/OptionsListContext';
import { darkTheme } from '../src/themes/DarkTheme';
import { lightTheme } from '../src/themes/LightTheme';

export default function App({ Component, pageProps }) {
  const { isDarkTheme } = useContext(OptionsListContext)

  return (
    <OptionsListContext.Provider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </OptionsListContext.Provider>
  )
}
