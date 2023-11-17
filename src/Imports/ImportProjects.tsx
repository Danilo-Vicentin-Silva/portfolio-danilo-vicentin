import { SiTailwindcss } from "react-icons/si"
import { useTranslation } from "react-i18next"
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"
import { SiFigma, SiNextdotjs, SiTypescript, SiWordpress } from "react-icons/si"
import { projectsCovers } from "../Imports/ImportProjectsCovers"
import { FaJsSquare, FaReact } from "react-icons/fa"
import { videos } from "../Imports/ImportVideos"
import { v4 as uuid } from "uuid"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"

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
      title: "Figma",
      icon: <SiFigma />,
      description: t("figmaDescription"),
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      description: t("tailwindDescription"),
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
    {
      title: "Wordpress",
      icon: <SiWordpress />,
      description: t("wordpressDescription"),
    },
  ]
}

export const ProjectsList = () => {
  const { t } = useTranslation()

  return [
    {
      title: "Landing Page",
      date: t("landingPageDate"),
      description: t("landingPageDescription"),
      image: projectsCovers.LandingPageCover,
      skillsUsed: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />, <SiFigma />],
      skillsName: ["Next.js", "Typescript", "Tailwind", "Figma"],
      websiteLink: "https://danilo-vicentin-silva.github.io/LandingPage/",
      githubLink: "https://github.com/Danilo-Vicentin-Silva/LandingPage",
      video: videos.LandingPageVideo,
      key: uuid(),
    },
    {
      title: "Data Galaxy",
      date: t("dataGalaxyDate"),
      description: t("dataGalaxyDescription"),
      image: projectsCovers.DataGalaxyCover,
      skillsUsed: [<SiNextdotjs />, <SiTypescript />, <FaReact />],
      skillsName: ["Next.js", "Typescript", "React"],
      websiteLink: "https://data-galaxy.vercel.app/",
      githubLink: "https://github.com/Danilo-Vicentin-Silva/Data-Galaxy",
      video: videos.DataGalaxyVideo,
      key: uuid(),
    },
    {
      title: "Racing F1",
      date: t("racingF1Date"),
      description: t("racingF1Description"),
      image: projectsCovers.RacingF1Cover,
      skillsUsed: [<FaJsSquare />, <AiFillHtml5 />, <DiCss3 />],
      skillsName: ["JavaScript", "HTML", "CSS"],
      websiteLink: "https://danilo-vicentin-silva.github.io/RacingF1/",
      githubLink: "https://github.com/Danilo-Vicentin-Silva/RacingF1",
      video: videos.RacingF1Video,
      key: uuid(),
    },
    {
      title: "Task List",
      date: t("taskListDate"),
      description: t("taskListDescription"),
      githubLink: "https://github.com/Danilo-Vicentin-Silva/Task-list",
      websiteLink: "https://danilotasklist.netlify.app/",
      image: projectsCovers.TaskListCover,
      skillsUsed: [<BiLogoReact />, <SiTypescript />],
      skillsName: ["React", "Typescript"],
      video: videos.TaskListVideo,
      key: uuid(),
    },
    {
      title: t("loginScreenTitle"),
      description: t("loginScreenDescription"),
      date: t("loginScreenDate"),
      skillsUsed: [<AiFillHtml5 />, <DiCss3 />],
      skillsName: ["HTML", "CSS"],
      githubLink: "https://github.com/Danilo-Vicentin-Silva/Tela-Login",
      websiteLink: "https://danilo-vicentin-silva.github.io/Tela-Login/",
      image: projectsCovers.LoginScreenCover,
      video: videos.TelaLoginVideo,
      key: uuid(),
    },
    {
      title: t("brazilianCordelTitle"),
      description: t("brazilianCordelDescription"),
      date: t("brazilianCordelDate"),
      skillsUsed: [<AiFillHtml5 />, <DiCss3 />],
      skillsName: ["HTML", "CSS"],
      githubLink: "https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno",
      websiteLink: "https://danilo-vicentin-silva.github.io/Cordel-Moderno/",
      image: projectsCovers.CordelModernoCover,
      video: videos.CordelModernoVideo,
      key: uuid(),
    },
    {
      title: t("websiteAndroidTitle"),
      description: t("websiteAndroidDescription"),
      date: t("websiteAndroidDate"),
      githubLink: "https://github.com/Danilo-Vicentin-Silva/Site-Android",
      websiteLink: "https://danilo-vicentin-silva.github.io/Site-Android/",
      skillsUsed: [<AiFillHtml5 />, <DiCss3 />],
      skillsName: ["HTML", "CSS"],
      image: projectsCovers.SiteAndroidCover,
      video: videos.SiteAndroidVideo,
      key: uuid(),
    },
  ];
}
