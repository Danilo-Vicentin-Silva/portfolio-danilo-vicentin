import { posts } from "../Blog/post"
import { BlogPostSeparatorStyled } from "./styles/BlogStyled"

const BlogPosts = () => {
  return (
    <section>
      {posts.map((post) => (
        <section>
          <h3>{post.title}</h3>
          <p>
            <small>{post.author}</small>
          </p>
          <p>{post.text}</p>
          <img src={post.image} alt={post.title} />
          <p>
            <small>{post.date} </small>
          </p>
          <p>
            {post.tags.map((tag) => (
              <span>{tag} </span>
            ))}
          </p>
          <BlogPostSeparatorStyled />
        </section>
      ))}
    </section>
  )
}

export default BlogPosts
