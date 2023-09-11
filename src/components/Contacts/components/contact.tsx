import { ContactStyled } from "../style/style"

interface Props {
  title: string
  icon: React.ReactNode
  link: string
}

const Contact: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <ContactStyled>
      <div id="icon" key={title}>
        <a
          href={link}
          rel="nofollow"
          target="_blank"
          aria-label={`This link opens my ${title} in a new tab`}
        >
          <span>{icon}</span>
        </a>
      </div>
      <p>{title}</p>
    </ContactStyled>
  )
}

export default Contact
