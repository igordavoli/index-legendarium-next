import styled from 'styled-components'

const primaryBackground = ({ theme }) => theme.colors.primary;
const primaryFontColor = ({ theme }) => theme.font.colorPrimary;
const boxShadow = ({ theme }) => theme.boxShadow;

export const OptionsListComponent = styled.div`
	top: 42px;
	right: 15px;
	width: 250px;

	background: ${primaryBackground};
	
  position: absolute;
	border-radius: 3px;
	overflow: hidden;
	
  box-shadow: ${boxShadow};
  
  color: ${primaryFontColor};
	
  ul {
		list-style: none;
	}

	li {
		padding: .8rem 1.5rem .8rem 1.5rem;
    transition: background-color 200ms
	}

	.options-item {
		padding: 0;
	}

	.activevate-dark-mode {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: .8rem 1.5rem .8rem 1.5rem;
		background-color: #cac9c968;
	}

	li:hover{
		background-color: #cac9c938;
	}
  
	@media (min-width: 642px){
		top: 55px;
		right: 17px;
	}
`;