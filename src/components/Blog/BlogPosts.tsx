import BlogPost from "./BlogPost"
import { posts } from "./postsList"

const BlogPosts = () => {
  return (
    <section>
      {posts.map((post) => (
        <section>
          <BlogPost
            title={post.title}
            author={post.author}
            text={post.text}
            image={post.image}
            date={post.date}
            tags={post.tags}
          />
        </section>
      ))}
    </section>
  )
}

export default BlogPosts
