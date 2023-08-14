import Button from "@mui/material/Button"
import { NavStyled } from "../style/style"

const Nav = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <NavStyled>
      <Button
        variant="outlined"
        className="nav-button"
        onClick={() => scrollTo("skills")}
      >
        Habilidades
      </Button>
      <Button
        variant="contained"
        onClick={() => scrollTo("contacts")}
        className="nav-button"
        id="contact-button"
      >
        Contatos
      </Button>
      <Button
        variant="outlined"
        onClick={() => scrollTo("projects")}
        className="nav-button"
      >
        Projetos
      </Button>
    </NavStyled>
  )
}

export default Nav
