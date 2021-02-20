import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Switch from '../Switch'
import { scale } from 'style-value-types';

const OptionsListElement = styled.div`
	top: 42px;
	right: 15px;
	width: 250px;
	background: #f0f0f0;
	position: absolute;
	border-radius: 3px;
	overflow: hidden;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	ul {
		list-style: none;
	}
	li {
		padding: .8rem 1.5rem .8rem 1.5rem;
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
		background-color: #e2e2e2;
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


// const IOSSwitch = withStyles((theme) => ({
//   root: {
//     width: 42,
//     height: 26,
//     padding: 0,
//     margin: theme.spacing(1),
//   },
//   switchBase: {
//     padding: 1,
//     '&$checked': {
//       transform: 'translateX(16px)',
//       color: theme.palette.common.white,
//       '& + $track': {
//         backgroundColor: '#52d869',
//         opacity: 1,
//         border: 'none',
//       },
//     },
//     '&$focusVisible $thumb': {
//       color: '#52d869',
//       border: '6px solid #fff',
//     },
//   },
//   thumb: {
//     width: 24,
//     height: 24,
//   },
//   track: {
//     borderRadius: 26 / 2,
//     border: `1px solid ${theme.palette.grey[400]}`,
//     backgroundColor: theme.palette.grey[50],
//     opacity: 1,
//     transition: theme.transitions.create(['background-color', 'border']),
//   },
//   checked: {},
//   focusVisible: {},
// }))(({ classes, ...props }) => {
//   return (
//     <Switch
//       focusVisibleClassName={classes.focusVisible}
//       disableRipple
//       classes={{
//         root: classes.root,
//         switchBase: classes.switchBase,
//         thumb: classes.thumb,
//         track: classes.track,
//         checked: classes.checked,
//       }}
//       {...props}
//     />
//   );
// });

