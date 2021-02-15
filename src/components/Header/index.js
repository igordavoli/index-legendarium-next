import styled from 'styled-components';
import Actions from  './Actions';
import InputBlock from  './InputBlock';
import LogoBlock from  './LogoBlock';

const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 7px;
	background: radial-gradient(
		50% 1445.4% at -1.91% 50%,
		#219653 0%,
		#27ae60 100%
	);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   
		position: relative; 
		z-index: 2; 
		@media (min-width: 768px) {
			padding: 7px;
			flex-direction: row;
			align-items: center;
			justify-content: center;
	
		}
		@media (min-width: 1025px) {
			padding: 10px;
		}
`;

export default function Home() {
	return (
		<Header>
			<Actions />
      <LogoBlock /> 
			<InputBlock />
		</Header>
	)
}