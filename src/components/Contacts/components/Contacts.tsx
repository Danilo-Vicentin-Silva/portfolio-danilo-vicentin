import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { ContactsStyled } from "../style/style";

const Contacts = () => {
  return (
    <ContactsStyled>
      <TopicSeparator title="Contatos" />
      <ul>
        <li>
          <a
            href="mailto:danilovicentindasilva@gmail.com"
            rel="nofollow"
            target="_blank"
          >
            <span></span>
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
        <li>
          <a
            href="https://www.instagram.com/danilo_vicentin_silva/"
            rel="nofollow"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100092172424197"
            rel="nofollow"
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.99freelas.com.br/user/Danilo-Vicentin-Silva"
            rel="nofollow"
            target="_blank"
          >
            99Frellas
          </a>
        </li>
      </ul>
    </ContactsStyled>
  );
};

export default Contacts;
