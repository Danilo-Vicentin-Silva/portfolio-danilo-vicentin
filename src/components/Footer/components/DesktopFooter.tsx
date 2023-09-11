import { useTranslation } from "react-i18next"
import { DesktopFooterStyled } from "../style/style"

const DesktopFooter = () => {
  const { t } = useTranslation()

  return (
    <DesktopFooterStyled>
      <article>
        <div>
          <h6>{t("sinceTheIdea")}</h6>
          <p>{t("sinceTheIdeaDescription")}</p>
        </div>
        <div>
          <h6>{t("modernWebsitesTitle")}</h6>
          <p>{t("modernWebsitesDescritpion")}</p>
        </div>
        <div>
          <h6>{t("supportTitle")}</h6>
          <p>{t("supportDescription")}</p>
        </div>
      </article>
      <hr />
    </DesktopFooterStyled>
  )
}

export default DesktopFooter
