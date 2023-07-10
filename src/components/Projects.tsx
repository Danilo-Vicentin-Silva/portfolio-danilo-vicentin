import { ProjectsStyled } from "../styles/styleComponents/MainStyle";
import Project from "./Project";
import { v4 as uuid } from "uuid";
import TopicSeparator from "./TopicSeparator";
import RacingF1ImageDesktop from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageTablet from "../assets/images/racing-f1/1220x754.webp";
import RacingF1ImageMobile from "../assets/images/racing-f1/768x475.webp";

const Projects = () => {
  return (
    <ProjectsStyled>
      <TopicSeparator title="Projetos" />
      <h4>Destaques</h4>
      <ul>
        <Project
          title="Racing F1"
          description="lroen isakjbhdkhasgb"
          images={[
            RacingF1ImageDesktop,
            RacingF1ImageTablet,
            RacingF1ImageMobile,
          ]}
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
