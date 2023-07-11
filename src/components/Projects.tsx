import { ProjectsStyled } from "../styles/styleComponents/MainStyle";
import Project from "./Project";
import { v4 as uuid } from "uuid";
import TopicSeparator from "./TopicSeparator";
import RacingF1ImageDesktop from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageTablet from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageMobile from "../assets/images/racing-f1/768x475.webp";
import TaskListImageDesktop from "../assets/images/task-list/1426x771.webp";
import TaskListImageTablet from "../assets/images/task-list/1200x649.webp";
import TaskListImageMobile from "../assets/images/task-list/768x415.webp";
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
          images={[
            RacingF1ImageDesktop,
            RacingF1ImageTablet,
            RacingF1ImageMobile,
          ]}
          skillsUsed={[<IoLogoJavascript />, <MdOutlineHtml />, <MdCss />]}
          websiteLink="https://danilo-vicentin-silva.github.io/RacingF1/"
          githubLink="https://github.com/Danilo-Vicentin-Silva/RacingF1"
          key={uuid()}
        />
        <Project
          title="Task List"
          date="27 de Janeiro de 2023"
          description="Lista de tarefas online, criada para fins didáticos no estudo das hooks do React. Pode ser anotado tarefas e conclução/exclução delas"
          githubLink="https://github.com/Danilo-Vicentin-Silva/Task-list"
          websiteLink="https://danilotasklist.netlify.app/"
          images={[
            TaskListImageDesktop,
            TaskListImageTablet,
            TaskListImageMobile,
          ]}
          skillsUsed={[
            <BiLogoReact />,
            <IoLogoJavascript />,
            <MdCss />,
            <MdOutlineHtml />,
          ]}
          key={uuid()}
        />
        <li className="box">Tela Login</li>
      </ul>
      <h4>Mais projetos</h4>
      <ul>
        <li>Cordel Moderno</li>
        <li>Site Andorid</li>
      </ul>
    </ProjectsStyled>
  );
};

export default Projects;
