import { Button } from "@mui/material";
import DaniloImg from "../images/danilo.webp";
import DaniloLogo from "../images/logo.png";
import DaniloCV from "../pdfs/danilo-vicentin-s-cv.pdf";
import { InitialInfoStyle } from "../styles/style";
import { useTranslation } from "react-i18next";

const InitialInfo = () => {
  const { t } = useTranslation();

  return (
    <InitialInfoStyle>
      <img
        src={DaniloImg}
        alt="Danilo Vicentin da Silva"
        className="image-transition"
        id="back-to-top-anchor"
      />
      <img src={DaniloLogo} alt="Logo" className="logo" />
      <article>
        <h2 className="animated-text">{t("hello")}</h2>
        <h2 className="animated-text">{t("myName")}</h2>
        <p className="animated-text">{t("webDeveloper")}</p>
        <Button variant="contained" id="download-cv-button">
          <a href={DaniloCV} download rel="nofollow" target="_blank">
            {t("downloadCV")}
          </a>
        </Button>
      </article>
    </InitialInfoStyle>
  );
};

export default InitialInfo;
