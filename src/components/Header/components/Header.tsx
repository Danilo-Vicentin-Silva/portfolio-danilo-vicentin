import * as React from "react"
import ToggleThemeButton from "./ToggleThemeButton"
import { HeaderStyled } from "../styles/style"
import ToogleLanguageButton from "./ToggleLanguageButton"
import useSwitch from "../../../hooks/useSwitch"

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { checked, handleSwitch } = useSwitch()

  return (
    <HeaderStyled>
      <ToogleLanguageButton />
      <ToggleThemeButton
        sx={{ m: 1 }}
        checked={checked}
        onClick={() => {
          toggleTheme()
          handleSwitch()
        }}
        aria-label="Switch the theme, dark/light (dark is default)"
      />
    </HeaderStyled>
  )
}

export default Header
