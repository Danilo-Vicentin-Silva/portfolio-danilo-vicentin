import * as React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { HeaderStyled } from "../styles/style";
import ToogleLanguageButton from "./ToggleLanguageButton";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <HeaderStyled>
      <ToogleLanguageButton />
      <ToggleThemeButton sx={{ m: 1 }} defaultChecked onClick={toggleTheme} />
    </HeaderStyled>
  );
};

export default Header;
