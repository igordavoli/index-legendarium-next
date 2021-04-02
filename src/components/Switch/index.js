import { useContext, useEffect } from 'react';
import { ThemesContext } from '../../contexts/ThemesContext';
import { motion } from 'framer-motion';
import { SwitchComponent } from '../../StyledComponents/SwitchComponent';
import cookies from 'js-cookie';

export default function Switch() {
  const isDarkTheme = cookies.get("isDarkTheme")
  const { switchTheme } = useContext(ThemesContext);
  const [isChecked, setIsChecked] = React.useState(isDarkTheme ?? false);

  useEffect(() => {
    isChecked
      ? cookies.set('isDarkTheme', isChecked)
      : cookies.remove('isDarkTheme')

    switchTheme(isChecked ? "dark" : "light");

  }, [isChecked]);

  return (
    <SwitchComponent>
      <input
        id="darkMode"
        className="switch switch-shadow"
        type="checkbox"
        value={isChecked}
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

