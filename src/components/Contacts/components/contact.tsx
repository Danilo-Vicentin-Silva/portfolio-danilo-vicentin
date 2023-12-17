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
      <span>{icon}</span>
      <hr />
      <div>
        <h3>{title}</h3>
        <p>{username}</p>
        <Button variant="contained">
          <a
            href={link}
            rel="nofollow"
            target="_blank"
            aria-label={`This link opens my ${title} in a new tab`}
          >
            Acesse
          </a>
        </Button>
      </div>
    </ContactStyled>
  )
}

export default Contact
