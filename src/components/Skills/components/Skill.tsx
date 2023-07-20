import { SkillCard } from "../style/style";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const Skill: React.FC<Props> = ({ title, icon }) => {
  return (
    <SkillCard>
      <h3>{title}</h3>
      <span>{icon}</span>
    </SkillCard>
  );
};

export default Skill;
