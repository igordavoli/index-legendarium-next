import { motion } from 'framer-motion';
import Switch from '../Switch';
import { OptionsListElement } from '../../styles/OptionsList';

export default function OptionsList({ isOpen, isHover }) {
  const state = (  
    (!isHover && !isOpen) && 'closed' ||
    (isHover && !isOpen ) && 'hover' ||
    (isOpen) &&'open'
  );
  
  return (
    <OptionsListElement
      as={ motion.div }
      initial='closed'
      animate={ state }  
      variants={{
        closed: { opacity: 0, display: 'none' },
        hover: { opacity: 0, y: '-5%', display: '' },
        open: { opacity: 1, y: '0%',  display: '' },
      }}
      transition={{ duration: .25 }}
    >
      <ul onClick={ (event) => event.stopPropagation() } >
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
