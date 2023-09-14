import { SkillCard } from "../style/SkillsStyled"

interface Props {
  title: string
  icon: React.ReactNode
  description: string
}

const Skill: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <SkillCard>
      <div id="front-card">
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div id="back-card">
        <span>{icon}</span>
      </div>
    </SkillCard>
  )
}

export default Skill
