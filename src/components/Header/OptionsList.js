import { useContext } from 'react';
import { motion } from 'framer-motion';
import Switch from '../Switch';
import { OptionsListComponent } from '../../styles/OptionsListComponent';
import { OptionsListContext } from '../../contexts/OptionsListContext';

export default function OptionsList({ isOpen, isHover }) {
  //const { } = useContext(OptionsListContext);

  const state = (
    (!isHover && !isOpen) && 'closed' ||
    (isHover && !isOpen) && 'hover' ||
    (isOpen) && 'open'
  );

  return (
    <OptionsListComponent
      as={motion.div}
      initial='closed'
      animate={state}
      variants={{
        closed: { opacity: 0, display: 'none' },
        hover: { opacity: 0, display: '', y: '-5%' },
        open: { opacity: 1, display: '', y: '0%' },
      }}
      transition={{ duration: .2 }}
    >
      <ul onClick={(event) => event.stopPropagation()} >
        <li>Conta</li>
        <li>Privacidade</li>
        <li className="options-item">
          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>
            <Switch onClick={""} />
          </div>
        </li>
        <li>Configirações</li>
      </ul>
    </OptionsListComponent>
  );
};
