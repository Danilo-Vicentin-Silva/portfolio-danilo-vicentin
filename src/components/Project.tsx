import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  ProjectCard,
  ProjectSection,
} from "../styles/styleComponents/MainStyle";
import { Button } from "@mui/joy";

interface Props {
  title: string;
  date: string;
  images: string[];
  description: string;
  skillsUsed?: React.ReactNode[];
  websiteLink: string;
  githubLink: string;
}

const Project: React.FC<Props> = ({
  title,
  date,
  images,
  description,
  skillsUsed,
  websiteLink,
  githubLink,
}) => {
  const [cardState, setCardState] = React.useState(false);
  const handleCardState = () => {
    if (cardState === false) {
      setCardState(true);
      document.body.style.overflow = "hidden";
    } else {
      setCardState(false);
      document.body.style.overflow = "";
    }
  };

  return cardState ? (
    <ProjectCard>
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
    </ProjectCard>
  ) : (
    <ProjectSection onClick={() => handleCardState()}>
      <h4>{title}</h4>

      <picture>
        <source media="(max-width: 768px)" srcSet={images[2]} />
        <source media="(max-width: 1200px)" srcSet={images[1]} />
        <img src={images[0]} alt={title} />
      </picture>
    </ProjectSection>
  );
};

export default Project;
