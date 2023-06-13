import * as React from "react"
import { HeaderStyle } from "../styles/styleComponents/HeaderStyle"
import ToggleThemeButton from "./ToggleThemeButton"

interface Props {
	toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

	return (
		<HeaderStyle>
			<ToggleThemeButton sx={{ m: 1 }} defaultChecked onClick={toggleTheme} />
		</HeaderStyle>
	)
}

export default Header
