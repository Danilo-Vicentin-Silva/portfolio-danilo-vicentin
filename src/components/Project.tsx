import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectVisible } from "../styles/styleComponents/MainStyle";

interface Props {
  title: string;
  images: [string, string, string];
  description: string;
}

const Project: React.FC<Props> = ({ title, images, description }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return isVisible ? (
    <section>
      <h4>{title}</h4>
      <span onClick={() => setIsVisible(false)}>
        <CloseIcon />
      </span>
      <p>{description}</p>
    </section>
  ) : (
    <ProjectVisible onClick={() => setIsVisible(true)}>
      <h4>{title}</h4>
      <picture>
        <source media="(max-width: 768px)" srcSet={images[2]} />
        <source media="(max-width: 1200px)" srcSet={images[1]} />
        <img src={images[0]} alt={title} />
      </picture>
    </ProjectVisible>
  );
};

export default Project;
