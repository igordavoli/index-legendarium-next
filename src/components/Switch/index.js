
import { motion } from 'framer-motion';
import App  from '../../../pages/_app';
import { SwitchElement } from '../../styles/Switch';

export default function Switch({ setIsDarkTheme }) {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <SwitchElement>
      <input
        id="darkMode"
        className="switch switch-shadow"
        type="checkbox"
        onClick={() => {
          setIsChecked(!isChecked)
           }}
      />
      <label htmlFor="darkMode">
        <motion.div
          animate={isChecked ? 'isOn' : ''}
          initial={{ x: 0 }}
          variants={{
            isOn: { x: '20px' }
          }}
        />
      </label>
    </SwitchElement>
  )
}