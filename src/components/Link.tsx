import { LinkStyle } from "../styles/styleComponents/MainStyle";

interface LinkProps {
  link: string;
  icon: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ link, icon }) => {
  return (
    <LinkStyle href={link} rel="nofollow" target="_blank">
      <span>{icon}</span>
    </LinkStyle>
  );
};

export default Link;
