import { SKillsStyled } from "../style/SkillsStyled"
import Skill from "./Skill"
import { SkillList } from "../../../Imports/ImportProjects"

const Skills = () => {
  const skillsList = SkillList()
  return (
    <SKillsStyled>
     
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
