import { BsGithub } from "react-icons/bs"
import { AiOutlineLink } from "react-icons/ai"
import { AiOutlineCloseCircle } from "react-icons/ai"
import * as React from "react"
import { ProjectCard, ProjectSection } from "../style/style"
import Video from "./Video"
import { BlurBackground } from "../../../styles/effects/BlurBackrgound"

interface Props {
  title: string
  date: string
  image: string
  description: string
  skillsUsed: React.ReactNode[]
  skillsName: string[]
  websiteLink: string
  githubLink: string
  video: string
}

const Project: React.FC<Props> = ({
  title,
  date,
  image,
  description,
  skillsUsed,
  skillsName,
  websiteLink,
  githubLink,
  video,
}) => {
  const [cardState, setCardState] = React.useState(false)
  const handleCardState = () => {
    setTimeout(() => {
      if (cardState === false) {
        setCardState(true)
        document.body.style.overflow = "hidden"
      } else {
        setCardState(false)
        document.body.style.overflow = ""
      }
    }, 250)
  }

  return cardState ? (
    <>
      <BlurBackground />
      <ProjectCard imageUrl={image}>
        {window.innerWidth >= 768 && <Video video={video} />}
        <div id="card-header">
          <div>
            <h4>{title}</h4>
            <h5>{date}</h5>
          </div>
          <span onClick={() => handleCardState()}>
            <AiOutlineCloseCircle />
          </span>
        </div>

        <p>{description}</p>
        <hr />

        <div id="skills-section">
          <ul>
            {skillsName &&
              skillsName.map((name, index) => (
                <li key={index}>
                  <span>{name}</span>
                </li>
              ))}
          </ul>
        </div>

        <div id="link-section">
          <span>
            <a href={websiteLink} rel="nofollow" target="_blank">
              <AiOutlineLink />
            </a>
          </span>
          <span>
            <a href={githubLink} rel="nofollow" target="_blank">
              <BsGithub />
            </a>
          </span>
        </div>
      </ProjectCard>
    </>
  ) : (
    <ProjectSection
      className="project-section"
      onClick={() => handleCardState()}
    >
      <div id="project-title">
        <h4>{title}</h4>
      </div>

      <img src={image} alt={title + " project"} />

      <div id="info">
        <ul>
          {skillsUsed &&
            skillsUsed.map((icon, index) => (
              <li>
                <span key={index}>{icon}</span>
              </li>
            ))}
        </ul>
      </div>
    </ProjectSection>
  )
}

export default Project
