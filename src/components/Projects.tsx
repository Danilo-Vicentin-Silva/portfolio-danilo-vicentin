import { ProjectsStyled } from "../styles/styleComponents/MainStyle";
import Project from "./Project";
import { v4 as uuid } from "uuid";
import TopicSeparator from "./TopicSeparator";
import RacingF1ImageDesktop from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageTablet from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageMobile from "../assets/images/racing-f1/768x475.webp";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineHtml } from "react-icons/md";

const Projects = () => {
  return (
    <ProjectsStyled>
      <TopicSeparator title="Projetos" />
      <h4>Destaques</h4>
      <ul>
        <Project
          title="Racing F1"
          description="Meu primeiro projeto em Front End, este que foi um exercício pensado por mim mesmo afim de comprovar minhas capacidades nas principais tecnologias. Site focado na informação geral da categoria máxima do automobilismo, este que contêm um design inspirado nas cores tema da Formula 1, uma mistura de vermelho e amarelo que expressam determinação com o foco extremo da categoria (e uma cor cinza para contraste). Além disso, apresenta as principais equipes e pilotos da categoria, resumindo suas histórias principais e seus desafios. Contém cards das principais equipes da formula 1 fornecendo informações sobre, assim como para os circuitos lendários da categoria"
          images={[
            RacingF1ImageDesktop,
            RacingF1ImageTablet,
            RacingF1ImageMobile,
          ]}
          skillsUsed={[<IoLogoJavascript />, <MdOutlineHtml />]}
          key={uuid()}
        />
        <li className="box">Task List</li>
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
