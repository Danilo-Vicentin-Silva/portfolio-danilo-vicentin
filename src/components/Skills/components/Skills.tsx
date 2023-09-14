import { useTranslation } from "react-i18next"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import { SKillsStyled } from "../style/SkillsStyled"
import Skill from "./Skill"
import { SkillList } from "./SkillsList"

const Skills = () => {
  const skillsList = SkillList()
  const { t } = useTranslation()

  return (
    <SKillsStyled>
      <TopicSeparator title={t("skillsTitle")} />
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
