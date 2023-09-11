import { Button } from "@mui/material"
import DaniloImg from "../../../assets/images/danilo.webp"
import PtbrCv from "../../../assets/pdfs/ptbr-cv.pdf"
import EnCv from "../../../assets/pdfs/en-cv.pdf"
import { InitialInfoStyle } from "../styles/style"
import { useTranslation } from "react-i18next"

const InitialInfo = () => {
  const { t } = useTranslation()
  const language = localStorage.getItem("language")

  return (
    <InitialInfoStyle>
      <img
        src={DaniloImg}
        alt="Danilo Vicentin da Silva"
        className="image-transition"
        id="back-to-top-anchor"
      />
      <article>
        <h2 className="animated-text">{t("hello")}</h2>
        <h2 className="animated-text">{t("myName")}</h2>
        <p className="animated-text">{t("webDeveloper")}</p>
        <Button variant="contained" id="download-cv-button">
          <a
            href={language === "en" ? EnCv : PtbrCv}
            download
            rel="nofollow"
            target="_blank"
          >
            {t("downloadCV")}
          </a>
        </Button>
      </article>
    </InitialInfoStyle>
  )
}

export default InitialInfo
