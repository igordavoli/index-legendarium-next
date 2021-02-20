import styled from 'styled-components';
import { motion } from 'framer-motion';
const SwitchElement = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
.switch {
	display: none;
}
label {
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
label div {
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
`;

export default function Switch() {
  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <SwitchElement>
      <input
        id="darkMode"
        className="switch switch-shadow"
        type="checkbox"
        onClick={() => setIsChecked(!isChecked)}
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
    </SwitchElement>
  )
}