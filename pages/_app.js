import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
    font-weight: 400;
    font-size:  1rem;
    background-color: #cccccc;
    color: #91A79A;
	  font-family: Playfair Display;
  }
  .hidded { 
    display: none;
  }

  .fill0, .fil1, .fill2 { transition: all 200ms; } 
  .fill0 { fill: #fefefe; }
  .fill1 { fill: #d9d9e2; }
  .fill2 { fill: #a1a2a7; }
`

const theme = {
  colors: {
    lighGreen: '#0070f3',
    darkGreen: '#0070f3',
    primary: '#0070f3',
    secundary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <header>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
    </header>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
