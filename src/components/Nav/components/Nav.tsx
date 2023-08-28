import Button from "@mui/material/Button";
import { NavStyled } from "../style/style";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation();

  return (
    <NavStyled>
      <Button
        variant="outlined"
        className="nav-button"
        onClick={() => scrollTo("skills")}
      >
        {t("habilits")}
      </Button>
      <Button
        variant="contained"
        onClick={() => scrollTo("contacts")}
        className="nav-button"
        id="contact-button"
      >
        {t("contacts")}
      </Button>
      <Button
        variant="outlined"
        onClick={() => scrollTo("projects")}
        className="nav-button"
      >
        {t("projects")}
      </Button>
    </NavStyled>
  );
};

export default Nav;
