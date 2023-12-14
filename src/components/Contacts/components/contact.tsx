import { ContactStyled } from "../style/style"

interface Props {
  title: string
  icon: React.ReactNode
  link: string
}

const Contact: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <ContactStyled>
      <div className="contact-card" key={title}>
        <span>{icon}</span>
        <div className="contact-card-content">
          <h2>{title}</h2>
          <p>{title}</p>
          <a
            href={link}
            rel="nofollow"
            target="_blank"
            aria-label={`This link opens my ${title} in a new tab`}
          >
            Acesse
          </a>
        </div>
      </div>
    </ContactStyled>
  )
}

export default Contact
