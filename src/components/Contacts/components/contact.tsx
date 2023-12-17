import { Button } from "@mui/material"
import { ContactStyled } from "../style/style"

interface Props {
  icon: React.ReactNode
  title: string
  username: string
  link: string
}

const Contact: React.FC<Props> = ({ icon, title, username, link }) => {
  return (
    <ContactStyled key={title}>
      <span className="span-contact">
        <a
          href={link}
          rel="nofollow"
          target="_blank"
          aria-label={`Esse link abre ${title} em uma nova guia`}
        >
          {icon}
        </a>
      </span>
      <div>
        <h3>{title}</h3>
        <p>{username}</p>
      </div>
    </ContactStyled>
  )
}

export default Contact
