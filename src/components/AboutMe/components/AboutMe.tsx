import { useTranslation } from "react-i18next";
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { AboutMeStyle } from "../style/style";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <AboutMeStyle>
      <TopicSeparator title={t("aboutMe")} />
      <p>{t("aboutMeDescription")}</p>
    </AboutMeStyle>
  );
};

export default AboutMe;
