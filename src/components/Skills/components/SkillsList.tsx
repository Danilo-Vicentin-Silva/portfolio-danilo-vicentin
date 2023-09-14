import { SiNextdotjs } from "react-icons/si"
import { useTranslation } from "react-i18next"
import {
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoReact,
  BiLogoHtml5,
} from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"

export const SkillList = () => {
  const { t } = useTranslation()

  return [
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      description: "Framework Fullstack",
    },
    {
      title: "React",
      icon: <BiLogoReact />,
      description: t("reactDescription"),
    },
    {
      title: "Typescript",
      icon: <BiLogoTypescript />,
      description: t("typescriptDescription"),
    },
    {
      title: "Javascript",
      icon: <RiJavascriptFill />,
      description: t("javascriptDescription"),
    },
    {
      title: "CSS3",
      icon: <BiLogoCss3 />,
      description: t("css3Description"),
    },
    {
      title: "HTML5",
      icon: <BiLogoHtml5 />,
      description: t("html5Description"),
    },
  ]
}
