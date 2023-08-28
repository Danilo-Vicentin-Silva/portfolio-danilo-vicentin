import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { ContactsStyled } from "../style/style";
import Contact from "./contact";
import { useTranslation } from "react-i18next";
import TwitterLogo from "../../../assets/images/twitter-logo.webp";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <ContactsStyled>
      <TopicSeparator title={t("contactsTitle")} />
      <ul>
        <li>
          <Contact
            icon={<MdOutlineMailOutline />}
            link="mailto:danilovicentindasilva@gmail.com"
            title="Email"
          />
        </li>
        <li>
          <Contact
            icon={<BsWhatsapp />}
            link="https://api.whatsapp.com/send?phone=5519991293761"
            title="WhatsApp"
          />
        </li>
        <li>
          <Contact
            icon={<CiLinkedin />}
            link="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
            title="LinkedIn"
          />
        </li>
        <li>
          <Contact
            icon={<FiGithub />}
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
            icon={<img src={TwitterLogo} alt="Twitter" width={40} />}
            link="https://twitter.com/DaniloVicentinS"
            title="X"
          />
        </li>
      </ul>
    </ContactsStyled>
  );
};

export default Contacts;
