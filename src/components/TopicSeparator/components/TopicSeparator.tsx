import { TopicSeparatorStyled } from "../style/style";

interface Topic {
  title: string;
}

const TopicSeparator: React.FC<Topic> = ({ title }) => {
  return (
    <TopicSeparatorStyled>
      <h3>{title}</h3>
      <hr />
    </TopicSeparatorStyled>
  );
};

export default TopicSeparator;
