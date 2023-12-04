import { BlogPostSeparatorStyled, BlogPostStyled } from "./styles/BlogStyled"

interface PostProps {
  title: string
  author: string
  text: string
  image: string
  date: string
  tags: string[]
}

const BlogPost: React.FC<PostProps> = ({
  title,
  author,
  text,
  image,
  date,
  tags,
}) => {
  return (
    <BlogPostStyled>
      <section>
        <h3>{title}</h3>
        <p id="p-author">
          <small>{author}</small>
        </p>
      </section>
      <section>
        <p id="p-content">{text}</p>
        <img src={image} alt={title} />
      </section>
      <section id="p-post-footer">
          <p id="p-date">
            <small>{date}</small>
          </p>
          <p id="p-tags">
            {tags.map((tag) => (
              <span>{tag} </span>
            ))}
          </p>
      </section>
      <BlogPostSeparatorStyled />
    </BlogPostStyled>
  )
}

export default BlogPost
