import DarkModeButton from "../DarkModeButton";
import { HeaderText, HeaderWrapper } from "./styled";

function Navbar() {
  return (
    <HeaderWrapper>
      <HeaderText>Where in the world?</HeaderText>
      <DarkModeButton />
    </HeaderWrapper>
  );
}

export { Navbar };
