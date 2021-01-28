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
  .fill0, .fil1, .fill2 { transition: all 200ms; } 
  .fill0 { fill: #fefefe; }
  .fill1 { fill: #d9d9e2; }
  .fill2 { fill: #a1a2a7; }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
