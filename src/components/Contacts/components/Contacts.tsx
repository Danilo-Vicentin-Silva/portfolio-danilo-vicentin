import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import { ContactsStyled } from "../style/style"
import Contact from "./contact"
import { useTranslation } from "react-i18next"

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <ContactsStyled>
      <TopicSeparator title={t("contactsTitle")} />
      <ul>
          <Contact
            icon={<AiOutlineMail />}
            link="mailto:danilovicentindasilva@gmail.com"
            title="Email"
          />
          <Contact
            icon={<AiOutlineWhatsApp />}
            link="https://api.whatsapp.com/send?phone=5519991293761"
            title="WhatsApp"
          />
          <Contact
            icon={<AiOutlineLinkedin />}
            link="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
            title="LinkedIn"
          />
          <Contact
            icon={<AiOutlineGithub />}
            link="https://github.com/Danilo-Vicentin-Silva"
            title="Github"
          />
          <Contact
            icon={<AiOutlineInstagram />}
            link="https://www.instagram.com/danilo_vicentin_silva/"
            title="Instagram"
          />
          <Contact
            icon={<AiOutlineFacebook />}
            link="https://www.facebook.com/danilo.vicentin.33/"
            title="Facebook"
          />
          <Contact
            icon={<AiOutlineTwitter />}
            link="https://twitter.com/DaniloVicentinS"
            title="Twitter"
          />
      </ul>
    </ContactsStyled>
  )
}

export default Contacts
