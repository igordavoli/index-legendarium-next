import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;	
    outline: none;    
  }
  :root {
	font-size: 62.5%;
  }
  #__next {
	  display: flex;
	  flex-direction: column;
    align-items: center;
    
}
  body {
    min-width: 240px;
    font-weight: 400;
    font-size:  1rem;
    background-color: ${({ theme }) => theme.colors.secundary};
    color: #91A79A;
	  font-family: Playfair Display;
  }
  main {
    margin-top: 69px;
  }
  .hidded { 
    display: none;
  }

  .fill0, .fil1, .fill2 { transition: all 200ms; } 
  .fill0 { fill: #fefefe; }
  .fill1 { fill: #d9d9e2; }
  .fill2 { fill: #a1a2a7; }
`

const lightTheme = {
  border: {
    radius: '7px',
  },
  boxShadow:'0px 3px 6px rgba(0, 0, 0, 0.25)',
  colors: {
    gradient: 'radial-gradient(50% 1445.4% at -1.91% 50%, #219653 0%, #27ae60 100%)',
    primary: '#fafafa',
    secundary: '#cccccc',
  },
  font: {
    primary: 'Playfair Display',
    secundary: 'sans-serif',
    colorPrimary: '#67776b',
    colorSecudary: '#91A79A',
  }

}
const darkTheme = {
  border: {
    radius: '7px',
  },
  boxShadow:'0px 3px 6px rgba(0, 0, 0, 0.25)',
  colors: {
    gradient: 'radial-gradient(50% 1445.4% at -1.91% 50%, #3C4043 0%, #545859 100%)',
    primary: '#686f6e',
    secundary: '#404447',
  },
  font: {
    primary: 'Playfair Display',
    secundary: 'sans-serif',
    colorPrimary: '#fefefe',
    colorSecudary: '#f0f0f0',
  }

}
const theme = lightTheme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
