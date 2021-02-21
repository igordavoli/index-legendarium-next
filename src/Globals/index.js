import { createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
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
`;