import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  ProjectCard,
  ProjectSection,
} from "../styles/styleComponents/MainStyle";

interface Props {
  title: string;
  images: string[];
  description: string;
  skillsUsed?: React.ReactNode[];
}

const Project: React.FC<Props> = ({
  title,
  images,
  description,
  skillsUsed,
}) => {
  const [cardState, setCardState] = React.useState(true);
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
      <hr />
      <div id="skills-section">
        {skillsUsed &&
          skillsUsed.map((icon, index) => <span key={index}>{icon}</span>)}
      </div>
      <p>{description}</p>
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
