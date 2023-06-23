import { TopicSeparatorStyle } from "../styles/styleComponents/MainStyle";

interface Topic {
  title: string;
}

const TopicSeparator: React.FC<Topic> = ({ title }) => {
  return (
    <TopicSeparatorStyle>
      <h3>{title}</h3>
      <hr />
    </TopicSeparatorStyle>
  );
};

export default TopicSeparator;
