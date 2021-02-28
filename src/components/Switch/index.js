
import { motion } from 'framer-motion';
import App from '../../../pages/_app';
import { SwitchComponent } from '../../styles/SwitchComponent';

export default function Switch() {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <SwitchComponent>
      <input
        id="darkMode"
        className="switch switch-shadow"
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)} />
      <label htmlFor="darkMode">
        <motion.div
          animate={isChecked ? 'isOn' : null}
          initial={{ x: 0 }}
          variants={{
            isOn: { x: '20px' }
          }}
        />
      </label>
    </SwitchComponent>
  )
}