
import Actions from './Actions';
import InputBlock from './InputBlock';
import LogoBlock from './LogoBlock';
import { HeaderComponent } from '../../styles/HeaderComponent';

export default function Home() {
  return (
    <HeaderComponent>
      <Actions />
      <LogoBlock />
      <InputBlock />
    </HeaderComponent>
  );
};