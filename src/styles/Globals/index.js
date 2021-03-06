import { createGlobalStyle } from "styled-components";

const primaryFont = ({ theme }) => theme.font.primary;
const primaryBackgroundColor = ({ theme }) => theme.colors.secundary;
const secundaryFontColor = ({ theme }) => theme.font.SecudaryColor;
export default createGlobalStyle`
  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;	
    outline: none;    
  }

  :root {
	font-size: 62.5%;
  scroll-behavior: smooth;
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
    background-color: ${primaryBackgroundColor};
    color: #91A79A;
	  font-family: ${primaryFont};
  }
  main {
    width:  100%;
    padding: 1rem;
  }
  
  h1,
	h2, 
	p,
  article {
		margin-bottom: 20px;
		font-weight: normal;
		line-height: 35px;
    font-family: ${primaryFont};
	}

	h1,
  h2 {
		color: ${secundaryFontColor};
	}

  .hidded { 
    display: none;
  }

  .fill0, .fil1, .fill2 { transition: all 200ms; } 
  .fill0 { fill: #fefefe; }
  .fill1 { fill: #d9d9e2; }
  .fill2 { fill: #a1a2a7; }
 
 @media(min-width: 1025px){
  main {
    width: 50vw;
    margin-top: 69px;
    min-height:100vh;
    max-width: 750px;
  }
  }
`;
