import styled from 'styled-components'
import { motion } from 'framer-motion'
import { scale } from 'style-value-types';

const OptionsList = styled.div` 
	top: 42px;
	right: 15px;
	width: 250px;
	background: #f0f0f0;
	position: absolute;
	border-radius: 3px;
	overflow: hidden;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	.switch-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;  
	}
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
		right: 22px;
	}

	.switch {
		display: none;
	}
	label {
		border-radius: 22px;  
	}
	.switch + label {
		display: block;
		position: relative;
		cursor: pointer;
		outline: none;
		user-select: none;
	}
	.switch-shadow + label {
		padding: 1px;
		width: 35px;
		height: 15px;
		background-color: #cacaca;
		border-radius: 22px;
		transition: background-color  0.3s;		
	}
	.switch-shadow + label:before,
	.switch-shadow + label:after {
		display: block;
		position: absolute;
		top: 1px;
		left: 1px;
		bottom: 1px;
		content: '';
		border-radius: 22px; 	
	}
	.switch-shadow + label:before {
		right: 1px;
		background-color: #dcdcdc;
		border-radius: 22px;
		transition: background-color  0.4s;
		border: 1px;	
	}
	.switch-shadow + label:after {
		width: 13px;
		background-color: #fff;
		border-radius: 22px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		transition: background-color  0.4s;	
	}
	.switch-shadow:checked + label:before {
		background-color: #77e9a2;	
	}
	.switch-shadow:checked + label:after {
		transform: translateX(20px);
		background-color: #5c5c5c;	   
	}
`;
export default function OptionsLst({ isOpen }) {
  return (
    <OptionsList
      as={motion.div}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}

      variants={{
        open: { display: ''},
        closed: {display: 'none'},
      }}
      transition={{
        duration: .0
      }}
    >
      <ul onClick={(event) => event.stopPropagation() }>
        <li>Conta</li>
        <li>Privacidade</li>
        <li className="options-item">
          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>
            <div className="switch-container">
              <input id="darkMode" className="switch switch-shadow" type="checkbox" />
              <label 
              // onClick={() => setDarkMode }
                as={motion.nav}
                variants={{
                }}
                transition={{
                  duration: .25
                }}
                htmlFor="darkMode"
              >
              </label>
            </div>
          </div>
        </li>
        <li>Configirações</li>
      </ul>
    </OptionsList>
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

