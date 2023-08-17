import * as React from "react"
import CloseIcon from "@mui/icons-material/Close"
import { Button } from "@mui/joy"
import { ProjectCard, ProjectSection } from "../style/style"
import Video from "./Video"

interface Props {
  title: string
  date: string
  images: string[]
  description: string
  skillsUsed?: React.ReactNode[]
  websiteLink: string
  githubLink: string
  video: string
}

const Project: React.FC<Props> = ({
  title,
  date,
  images,
  description,
  skillsUsed,
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
    <ProjectCard>
      {window.innerWidth >= 768 && <Video video={video} />}
      <div id="card-header">
        <h4>{title}</h4>
        <span onClick={() => handleCardState()}>
          <CloseIcon color="warning" />
        </span>
      </div>

      <h5>{date}</h5>

      <hr />

      <div id="skills-section">
        {skillsUsed &&
          skillsUsed.map((icon, index) => <span key={index}>{icon}</span>)}
      </div>

      <p>{description}</p>

      <div id="link-section">
        <Button className="link-button" variant="outlined">
          <a href={websiteLink} rel="nofollow" target="_blank">
            Website
          </a>
        </Button>
        <Button className="link-button" variant="outlined">
          <a href={githubLink} rel="nofollow" target="_blank">
            Github
          </a>
        </Button>
      </div>
    </ProjectCard>
  ) : (
    <ProjectSection
      className="project-section"
      onClick={() => handleCardState()}
    >
      <h4>{title}</h4>

      <picture>
        <source media="(min-width: 1200px)" srcSet={images[0]} />
        <source media="(min-width: 768px)" srcSet={images[1]} />
        <img src={images[2]} alt={title} />
      </picture>

      <div id="info">
        {skillsUsed &&
          skillsUsed.map((icon, index) => <span key={index}>{icon}</span>)}
      </div>
    </ProjectSection>
  )
}

export default Project
