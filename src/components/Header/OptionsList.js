import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Switch from '../Switch';
import { OptionsListComponent } from '../../StyledComponents/OptionsListComponent';
import Link from '../Link';
import { LoginContext } from '../../contexts/LoginContext';
import { useRouter } from 'next/router';

export function OptionsList({ isOpen, isHover }) {
  const router = useRouter();
  const { isLoged, logout, userName } = useContext(LoginContext);

  const state =
    (!isHover && !isOpen && "closed") ||
    (isHover && !isOpen && "hover") ||
    (isOpen && "open");

  return (
    <OptionsListComponent
      as={motion.div}
      initial="closed"
      animate={state}
      variants={{
        closed: { opacity: 0, display: "none" },
        hover: { opacity: 0, display: "", y: "-5%" },
        open: { opacity: 1, display: "", y: "0%" },
      }}
      transition={{ duration: 0.2 }}
    >
      <ul onClick={event => event.stopPropagation()}>
        {isLoged ? (
          <li onClick={() => router.push(`/users/${userName}`)}>Conta</li>
        ) : (
          <li>
            <Link href="/signIn">Login</Link>
          </li>
        )}
        <li>Privacidade</li>
        <li className="options-item">
          <div className="activevate-dark-mode">
            <label htmlFor="darkMode">Modo escuro</label>
            <Switch />
          </div>
        </li>
        <li>Configurações</li>
        {isLoged && <li onClick={logout}>Sair</li>}
      </ul>
    </OptionsListComponent>
  );
}
