import Logo from "../../../assets/images/logo.webp"
import * as React from "react"
import ToggleThemeButton from "./ToggleThemeButton"
import { HeaderStyled } from "../styles/style"
import ToogleLanguageButton from "./ToggleLanguageButton"
import useSwitch from "../../../hooks/useSwitch"
import { Link, useLocation } from "react-router-dom"

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { checked, handleSwitch } = useSwitch()
  const location = useLocation()
  const currentUrl = location.pathname

  return (
    <HeaderStyled>
      <img src={Logo} alt="Logo" id="logo" />
      {currentUrl !== "/blog" && (
        <Link to={"/blog"} rel="next" target="_self">
          Blog
        </Link>
      )}
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
