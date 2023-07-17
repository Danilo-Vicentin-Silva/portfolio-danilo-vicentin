import { FooterStyled } from "../style/style";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <FooterStyled>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a
            href="mailto:danilovicentindasilva@gmail.com"
            rel="nofollow"
            target="_blank"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
            rel="nofollow"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Danilo-Vicentin-Silva"
            rel="nofollow"
            target="_blank"
          >
            Github
          </a>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
