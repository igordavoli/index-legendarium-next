import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from '../Switch'
import { scale } from 'style-value-types';

const OptionsListElement = styled.div`
	top: 42px;
	right: 15px;
	width: 250px;
	background: ${({ theme }) => theme.colors.primary};
	position: absolute;
	border-radius: 3px;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.font.colorPrimary};
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

export default function OptionsList({ isOpen, isHover }) {
  let state;  

  if (!isHover && !isOpen) state = 'closed'
  if (isHover && !isOpen ) state = 'hover'
  if (isOpen) state = 'open'
  return (
    <OptionsListElement
      as={motion.div}
   
      initial='closed'
      
      animate={ state }  

      variants={{
        open: { opacity: 1, height: '', y: '0%',  display: '' },
        closed: { opacity: 0, display: 'none'} ,
        hover: { opacity: 0, height: '', y: '-5%', display: ''} 
      }}
      transition={{
        duration: .25
      }}
    >
      <ul onClick={(event) => event.stopPropagation()}>
        <li>Conta</li>
        <li>Privacidade</li>
        <li className="options-item">

          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>           
            <Switch />
          </div>
        </li>
        <li>Configirações</li>
      </ul>
    </OptionsListElement>
  );
};
