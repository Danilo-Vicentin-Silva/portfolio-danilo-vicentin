import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
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
          username="danilo_vicentin_silva"
          title="Email"
        />
        <Contact
          icon={<AiOutlineWhatsApp />}
          link="https://api.whatsapp.com/send?phone=5519991293761"
          username="danilo_vicentin_silva"
          title="WhatsApp"
        />
        <Contact
          icon={<AiOutlineLinkedin />}
          link="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
          username="danilo_vicentin_silva"
          title="LinkedIn"
        />
        <Contact
          icon={<AiOutlineGithub />}
          link="https://github.com/Danilo-Vicentin-Silva"
          username="danilo_vicentin_silva"
          title="Github"
        />
        <Contact
          icon={<AiOutlineInstagram />}
          link="https://www.instagram.com/danilo_vicentin_silva/"
          username="danilo_vicentin_silva"
          title="Instagram"
        />
        <Contact
          icon={<AiOutlineFacebook />}
          link="https://www.facebook.com/danilo.vicentin.33/"
          username="danilo_vicentin_silva"
          title="Facebook"
        />
        <Contact
          icon={<AiOutlineTwitter />}
          link="https://twitter.com/DaniloVicentinS"
          username="danilo_vicentin_silva"
          title="Twitter"
        />
      </ul>
    </ContactsStyled>
  )
}

export default Contacts
