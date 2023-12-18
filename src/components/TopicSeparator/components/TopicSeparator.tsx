import { TopicSeparatorStyled } from "../style/style"

interface Topic {
  title: string
  id?: string
}

const TopicSeparator: React.FC<Topic> = ({ title, id }) => {
  return (
    <TopicSeparatorStyled>
      <h3 id={id}>{title}</h3>
      <hr />
    </TopicSeparatorStyled>
  )
}

export default TopicSeparator
