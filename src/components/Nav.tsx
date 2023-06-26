import Button from "@mui/material/Button"
import { NavStyle } from "../styles/styleComponents/MainStyle"

const Nav = () => {
	const goToSection = (y: number) => {
		window.scrollTo(0, y)
	}

	return (
		<NavStyle>
			<Button
				variant="outlined"
				onClick={() => goToSection(500)}
				className="nav-button"
			>
				Habilidades
			</Button>
			<Button
				variant="contained"
				onClick={() => goToSection(1500)}
				className="nav-button"
				id="contact-button"
			>
				Contatos
			</Button>
			<Button
				variant="outlined"
				onClick={() => goToSection(900)}
				className="nav-button"
			>
				Projetos
			</Button>
		</NavStyle>
	)
}

export default Nav
