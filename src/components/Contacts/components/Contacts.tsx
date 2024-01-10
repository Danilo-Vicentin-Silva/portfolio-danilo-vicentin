import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai"
import { ContactsStyled } from "../style/style"
import Contact from "./contact"

const Contacts = () => {
  return (
    <ContactsStyled>
      <ul>
        <Contact
          icon={<AiOutlineMail />}
          link="mailto:danilovicentindasilva@gmail.com"
          username="Danilo Vicentin"
          title="Email"
        />
        <Contact
          icon={<AiOutlineWhatsApp />}
          link="https://api.whatsapp.com/send?phone=5519991293761"
          username="Danilo Vicentin da Silva"
          title="WhatsApp"
        />
        <Contact
          icon={<AiOutlineLinkedin />}
          link="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
          username="Danilo Vicentin S"
          title="LinkedIn"
        />
        <Contact
          icon={<AiOutlineGithub />}
          link="https://github.com/Danilo-Vicentin-Silva"
          username="Danilo Vicentin. S"
          title="Github"
        />
      </ul>
    </ContactsStyled>
  )
}

export default Contacts
