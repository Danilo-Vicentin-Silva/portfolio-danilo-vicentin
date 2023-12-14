import {} from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"; 
import { AiOutlineGithub } from "react-icons/ai"; 
import { AiOutlineLinkedin } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { AiOutlineFacebook } from "react-icons/ai";
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { ContactsStyled } from "../style/style";
import Contact from "./contact";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <ContactsStyled>
      <TopicSeparator title={t("contactsTitle")} />
      <ul>
        <li>
          <Contact
            icon={<AiOutlineMail />}
            link="mailto:danilovicentindasilva@gmail.com"
            title="Email"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineWhatsApp />}
            link="https://api.whatsapp.com/send?phone=5519991293761"
            title="WhatsApp"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineLinkedin />}
            link="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
            title="LinkedIn"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineGithub />}
            link="https://github.com/Danilo-Vicentin-Silva"
            title="Github"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineInstagram />}
            link="https://www.instagram.com/danilo_vicentin_silva/"
            title="Instagram"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineFacebook />}
            link="https://www.facebook.com/danilo.vicentin.33/"
            title="Facebook"
          />
        </li>
        <li>
          <Contact
            icon={<AiOutlineTwitter />}
            link="https://twitter.com/DaniloVicentinS"
            title="Twitter"
          />
        </li>
      </ul>
    </ContactsStyled>
  )
};

export default Contacts;
