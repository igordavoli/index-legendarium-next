import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
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
	.switch {
		display: none;
	}
	.switch-container label {
    display: flex;
    align-items: center;
    width: 35px;
    height: 15px;
		border-radius: 22px;
    border: 1px solid #bbbbbb;
    background-color: #cacaca;
    transition: background-color  300ms;

	}
  .switch:checked + label{
    background-color: #77e9a2
  }
  .switch-container label div {
    height: 13px;
    width: 13px;
    border-radius: 100%;
    border: 1px solid #dddddd;
    background-color: #dcdcdc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .switch:checked + label div {
    background-color: #8f8f8f;
    border-color: #8f8f8f;
  }

	@media (min-width: 642px){
		top: 55px;
		right: 22px;
	}


`;
export default function OptionsLst({ isOpen }) {
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <OptionsList
      as={motion.div}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, height: '' },
        closed: { opacity: 0, height: 0 },
      }}
      transition={{
        duration: .1
      }}
    >
      <ul onClick={(event) => event.stopPropagation() }>
        <li>Conta</li>
        <li>Privacidade</li>
        <li className="options-item">

          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>
              <div className="switch-container">
                <input
                  id="darkMode"
                  className="switch switch-shadow"
                  type="checkbox"
                  onClick={() => setIsChecked(!isChecked) }
                />
                <label htmlFor="darkMode">
                  <motion.div
                    animate={isChecked ? 'darkMode' : ''}
                    initial={{ x: 0 }}
                    variants={{
                      darkMode: { x: '20px' }
                    }}
                  />
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

