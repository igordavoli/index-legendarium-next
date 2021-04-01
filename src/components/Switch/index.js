import { useContext } from 'react';
import { ThemesContext } from '../../contexts/ThemesContext';
import { motion } from 'framer-motion';
import { SwitchComponent } from '../../StyledComponents/SwitchComponent';

export default function Switch() {
  const { switchTheme } = useContext(ThemesContext);
  const [isChecked, setIsChecked] = React.useState(false);

  switchTheme(isChecked ? "dark" : "light");

  return (
    <SwitchComponent>
      <input
        id="darkMode"
        className="switch switch-shadow"
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="darkMode">
        <motion.div
          animate={isChecked ? "isOn" : null}
          initial={{ x: 0 }}
          variants={{
            isOn: { x: "20px" },
          }}
        />
      </label>
    </SwitchComponent>
  );
}
