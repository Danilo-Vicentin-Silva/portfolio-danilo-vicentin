import { SkillCard } from "../style/style";

interface Props {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const Skill: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <SkillCard>
      <div id="front-card">
        <h3>{title}</h3>
        <span>{icon}</span>
      </div>
      <div id="back-card">
        <p>{description}</p>
      </div>
    </SkillCard>
  );
};

export default Skill;
