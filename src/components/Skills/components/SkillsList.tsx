import {
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoGit,
  BiLogoReact,
  BiLogoHtml5,
  BiSearch,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

export const SkillList = [
  {
    title: "React",
    icon: <BiLogoReact />,
    description: "Framework para aplicações web",
  },
  {
    title: "Typescript",
    icon: <BiLogoTypescript />,
    description: "Versão mais sofisticada do JS",
  },
  {
    title: "Javascript",
    icon: <RiJavascriptFill />,
    description: "Linguagem de programação para Web",
  },
  {
    title: "CSS3",
    icon: <BiLogoCss3 />,
    description: "Linguagem de estilização Web",
  },
  {
    title: "HTML5",
    icon: <BiLogoHtml5 />,
    description: "Linguagem de marcação Web",
  },
  {
    title: "Git",
    icon: <BiLogoGit />,
    description: "Controle de versões",
  },
  {
    title: "SEO",
    icon: <BiSearch />,
    description: "Otimização para mecanismos de busca",
  },
];
