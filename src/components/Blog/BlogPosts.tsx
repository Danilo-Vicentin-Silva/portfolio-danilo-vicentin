import { posts } from "../Blog/post"

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
          <hr />
        </section>
      ))}
    </section>
  )
}

export default BlogPosts
