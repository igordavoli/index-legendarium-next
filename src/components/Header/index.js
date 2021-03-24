import { HeaderComponent } from "../../StyledComponents/HeaderComponent";
import { Actions } from "./Actions";
import { LogoBlock } from "./LogoBlock";
import { InputBlock } from "./InputBlock";

export function Header(props) {
  const { displayAddButton } = props;

  return (
    <HeaderComponent>
      <Actions displayAddButton={displayAddButton} />
      <LogoBlock />
      <InputBlock />
    </HeaderComponent>
  );
}
