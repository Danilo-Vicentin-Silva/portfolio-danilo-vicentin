import { ContactStyled } from "../style/style";

interface Props {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const Contact: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <ContactStyled>
      <div id="icon">
          <a href={link} rel="nofollow" target="_blank">
            <span>{icon}</span>
          </a>
      </div>
      <p>{title}</p>
    </ContactStyled>
  );
};

export default Contact;
