import * as React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { HeaderStyled } from "../styles/style";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <HeaderStyled>
      <ToggleThemeButton sx={{ m: 1 }} defaultChecked onClick={toggleTheme} />
    </HeaderStyled>
  );
};

export default Header;
