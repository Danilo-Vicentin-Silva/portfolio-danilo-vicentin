import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import { SKillsStyled } from "../style/style"
import Skill from "./Skill"
import { SkillList } from "./SkillsList"

const Skills = () => {
  const skillsList = SkillList

  return (
    <SKillsStyled>
      <TopicSeparator title="Habilidades" />
      <ul>
        {skillsList.map((skill, i) => (
          <li key={i}>
            <Skill
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          </li>
        ))}
      </ul>
    </SKillsStyled>
  )
}
export default Skills
