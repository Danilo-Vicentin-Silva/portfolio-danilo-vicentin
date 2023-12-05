import uuid from "react-uuid"
import BlogPost from "./BlogPost"
import { posts } from "./postsList"

const BlogPosts = () => {
  return (
    <section>
      {posts.map((post) => (
        <BlogPost
          title={post.title}
          author={post.author}
          text={post.text}
          image={post.image}
          date={post.date}
          tags={post.tags}
          key={uuid()}
        />
      ))}
    </section>
  )
}

export default BlogPosts
