import { AboutMeStyle } from "../style/style"
import { useTranslation } from "react-i18next"

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <AboutMeStyle>
      <p>{t("aboutMeDescription")}</p>
    </AboutMeStyle>
  )
}

export default AboutMe
