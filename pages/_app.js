import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from "../src/Globals";

const lightTheme = {
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

}
const darkTheme = {
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

export default function App({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    if (!isDarkTheme) {
      window.localStorage.setItem('theme', true)
      setIsDarkTheme(true)
    } else {
      window.localStorage.setItem('theme', false)
      setIsDarkTheme(false)
    }
  }

  React.useEffect(() => {
    const locaTheme = window.localStorage.getItem('theme');
    setIsDarkTheme(locaTheme);
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <>
        <GlobalStyle />
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png"/>    
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

           <title>index Legendarium</title> 

        </Head>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>

  )
}
