import { ProjectsStyled } from "../styles/styleComponents/MainStyle";
import Project from "./Project";
import { v4 as uuid } from "uuid";
import TopicSeparator from "./TopicSeparator";
import {
  CordelModernoImages,
  RacingF1Images,
  SiteAndroidImages,
  TaskListImages,
  TelaLoginImages,
} from "./importImages";

import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineHtml, MdCss } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";

const Projects = () => {
  return (
    <ProjectsStyled>
      <TopicSeparator title="Projetos" />
      <h4>Destaques</h4>
      <ul>
        <Project
          title="Racing F1"
          date="28 de Outubro de 2022"
          description="Meu primeiro projeto em Front End, este que foi um exercício pensado por mim mesmo afim de comprovar minhas capacidades nas principais tecnologias. Site focado na informação geral da categoria máxima do automobilismo, este que contêm um design inspirado nas cores tema da Formula 1, uma mistura de vermelho e amarelo que expressam determinação com o foco extremo da categoria (e uma cor cinza para contraste)."
          images={RacingF1Images}
          skillsUsed={[<IoLogoJavascript />, <MdOutlineHtml />, <MdCss />]}
          websiteLink="https://danilo-vicentin-silva.github.io/RacingF1/"
          githubLink="https://github.com/Danilo-Vicentin-Silva/RacingF1"
          key={uuid()}
        />
        <Project
          title="Task List"
          date="27 de Janeiro de 2023"
          description="Lista de tarefas online, criada para fins didáticos no estudo das hooks do React. Pode ser anotado tarefas e conclução/exclução delas. Este projeto pessoal foi criado com o objetivo de consolidar meus estudos de react, assim como esse portfólio e vários outros projetos"
          githubLink="https://github.com/Danilo-Vicentin-Silva/Task-list"
          websiteLink="https://danilotasklist.netlify.app/"
          images={TaskListImages}
          skillsUsed={[
            <BiLogoReact />,
            <IoLogoJavascript />,
            <MdCss />,
            <MdOutlineHtml />,
          ]}
          key={uuid()}
        />
        <Project
          title="Tela de Login"
          description="Tela de Login (sem autenticação) criada para ser uma desmostração de minhas capacidades de desenvolver um design simples de uma tela de login responsiva. Proposta didática do meu curso de HTML&CSS para fins de consolidar alguns conhecimentos sobre formulários HTML e telas de login com CSS."
          date="26 de Outubro de 2022"
          skillsUsed={[<MdOutlineHtml />, <MdCss />, <IoLogoJavascript />]}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Tela-Login"
          websiteLink="https://danilo-vicentin-silva.github.io/Tela-Login/"
          images={TelaLoginImages}
          key={uuid()}
        />
      </ul>
      <h4>Mais projetos</h4>
      <ul>
        <Project
          title="Cordel Moderno"
          description="Cordel Brasilleiro representado em um site que possuí um um belíssimo efeito paralax, permitindo mais estilo e temática a esse site. Outra proposta didática com o objetivo de consolidar meus conhecimentos com alguns efeitos gerados em CSS, como o efeito Paralax, um belíssimo efeito gerado com CSS."
          date="6 de Julho de 2022"
          skillsUsed={[<MdOutlineHtml />, <MdCss />]}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"
          websiteLink="https://danilo-vicentin-silva.github.io/Cordel-Moderno/"
          images={CordelModernoImages}
          key={uuid()}
        />
        <Project
          title="Site Android"
          description="Site no estilo informativo que aplica quase todos os conceitos básicos que estudei em HTML&CSS, esse site tem o objetivo de contar a histório da criação do ícone do sistema Android, uma histório bem curiosa por sinal. Essa proposta didática foi ótima para consolidar minha base em HTML&CSS."
          date="14 de Setembro de 2022"
          githubLink="https://github.com/Danilo-Vicentin-Silva/Site-Android"
          websiteLink="https://danilo-vicentin-silva.github.io/Site-Android/"
          skillsUsed={[<MdOutlineHtml />, <MdCss />]}
          images={SiteAndroidImages}
          key={uuid()}
        />
      </ul>
    </ProjectsStyled>
  );
};

export default Projects;
