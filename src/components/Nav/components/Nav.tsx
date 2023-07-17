import Button from "@mui/material/Button";
import { NavStyled } from "../style/style";

const Nav = () => {
  const goToSection = (y: number) => {
    window.scrollTo(0, y);
  };

  return (
    <NavStyled>
      <Button
        variant="outlined"
        onClick={() => goToSection(500)}
        className="nav-button"
      >
        Habilidades
      </Button>
      <Button
        variant="contained"
        onClick={() => goToSection(2150)}
        className="nav-button"
        id="contact-button"
      >
        Contatos
      </Button>
      <Button
        variant="outlined"
        onClick={() => goToSection(1050)}
        className="nav-button"
      >
        Projetos
      </Button>
    </NavStyled>
  );
};

export default Nav;
