import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Globals';
import { ThemesContext } from '../contexts/ThemesContext'

export const themes = {
  light: {
    border: {
      radius: '7px',
      border: '1px solid #d3e5dc',
    },
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
    colors: {
      gradient: 'radial-gradient(50% 1445.4% at -1.91% 50%, #219653 0%, #27ae60 100%)',
      primary: '#fafafa',
      secundary: '#cccccc',
      inputColor: '#f5f8fa',
      primaryHover: '#d8dfdb',
      secundaryHover: '#d8dfdb',
      formBackground: '#f0f0f0',
      tertiaryHover: '#77e9a233',
      button: '#e7f0eb'
    },
    font: {
      primary: 'Playfair Display',
      secundary: 'sans-serif',
      colorPrimary: '#67776b',
      colorSecudary: '#91A79A',
    },
    svg: {
      primaryFill: '#27ae60',
      secundaryFill: '#91A79A',
    }
  },
  dark: {
    border: {
      radius: '7px',
      border: '1px solid #555',
    },
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
    colors: {
      gradient: 'radial-gradient(50% 1445.4% at -1.91% 50%, #3C4043 0%, #545859 100%)',
      primary: '#686f6e',
      secundary: '#404447',
      inputColor: '#818a89',
      inputBorder: '#d3e5dc',
      primaryHover: '#666a6b',
      formBackground: '#505055',
      secundaryHover: '#404447aa',
      tertiaryHover: '#666a6b',
      button: '#686f6e'
    },
    font: {
      primary: 'Playfair Display',
      secundary: 'sans-serif',
      colorPrimary: '#fefefe',
      colorSecudary: '#f0f0f0',
    },
    svg: {
      primaryFill: '#fefefe',
      secundaryFill: '#fefefe',
    }
  }
}

const Theme = ({ children }) => {
  const { theme } = useContext(ThemesContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
export default Theme;