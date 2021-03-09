import styled from 'styled-components';

const secundaryBackgroundColor = ({ theme }) => theme.colors.secundaryHover;
const boxShadow = ({ theme }) => theme.boxShadow;
const inputBackground = ({ theme }) => theme.colors.inputColor;
const primaryFontColor = ({ theme }) => theme.font.colorPrimary;
const borderRadius = ({ theme }) => theme.border.radius;
const formBackground = ({ theme }) => theme.colors.formBackground;

export const FormComponent = styled.form`
	display: flex;
	flex-direction: column;
  align-items: center;
	height: fit-content;
	width: 95vw;
	margin: 10px 0 10px 0 ;
	padding: 20px 30px  20px  30px;
	background-color: ${formBackground};
  box-shadow: ${boxShadow};
	border-radius: ${borderRadius};
  line-height: 2.25rem;
	font-size: 1.5rem;
	color: #9bafa0;
	transition: background-color  200ms;

h1 {
	line-height: 3rem;
	font-style: Playfair Display;
}

.input-block {
	margin: 15px 0 15px 0;
  width: 100%;   
}

label {
	display: flex;
	justify-content: space-between;
	font-family: sans-serif;
}

.selectors {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 16rem;
}
.selectors select {
	width: 250px;
	height: 35px;
  padding: 2.5px;
	border: none;
	border-radius: ${borderRadius};
	background-color: #27ae60ee;
	color: #fefefe;
	font-size: 1.5rem;
}

input,
textarea {
	height: 35px;
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	border: 1px solid ${secundaryBackgroundColor}; 
	border-radius: 5px;
	font-size: 1.5rem;
	line-height: 2rem;
	font-family: sans-serif;
  background-color: ${inputBackground};
	color: ${primaryFontColor};
}

textarea {
	height: 100px;
	resize: vertical;
}

div.button {
	align-self: center;
	width: 100%;
	margin: 0px 20px 20px 20px;  
}

.primary-button{
  display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	height: 35px;
	background: #37C77F;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	transition: background-color  200ms;
	margin-top: 6.4rem;
	font-size: 1.6rem;
	line-height: 26px;
	color:#ffffff;
	text-decoration: none;
}

/*
  # DESKTOP VERSION #
*/

@media (min-width: 642px) {
	width: 700px;
	
 h1 {
		margin-bottom: 20px;

	}

 .selectors {
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
  
	div.button,
	.primary-button{
		width: 200px;
	}
}
`