import { BiX } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { CiLinkedin } from "react-icons/ci"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import { ContactsStyled } from "../style/style"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import Contact from "./Contact"

const Contacts = () => {
  return (
    <ContactsStyled>
      <TopicSeparator title="Contatos" />
      <ul>
        <li>
          <Contact
            icon={<MailOutlineIcon />}
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
            icon={<CgClose />}
            link="https://twitter.com/DaniloVicentinS"
            title="X"
          />
        </li>
      </ul>
    </ContactsStyled>
  )
}

export default Contacts
