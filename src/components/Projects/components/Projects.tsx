import Project from "./Project"
import { ProjectsStyled } from "../style/style"
import { useTranslation } from "react-i18next"
import { ProjectsList } from "../../../Imports/ImportProjects"

const Projects = () => {
  const projectsList = ProjectsList()
  const highlights = projectsList.slice(0, 3)
  const moreProjects = projectsList.slice(3)
  const { t } = useTranslation()

  return (
    <ProjectsStyled>
      <h4>{t("highlights")}</h4>

      <ul>
        {highlights.map((project, i) => (
          <li key={i}>
            <Project
              title={project.title}
              date={project.date}
              image={project.image}
              description={project.description}
              skillsUsed={project.skillsUsed}
              skillsName={project.skillsName}
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
              video={project.video}
            />
          </li>
        ))}
      </ul>

      <h5>{t("moreProjects")}</h5>
      <ul>
        {moreProjects.map((project, i) => (
          <li key={i}>
            <Project
              title={project.title}
              date={project.date}
              image={project.image}
              description={project.description}
              skillsUsed={project.skillsUsed}
              skillsName={project.skillsName}
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
              video={project.video}
            />
          </li>
        ))}
      </ul>
    </ProjectsStyled>
  )
}

export default Projects
