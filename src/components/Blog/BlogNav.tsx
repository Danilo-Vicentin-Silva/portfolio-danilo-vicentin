import { BlogNavStyled, BlogPostSeparatorStyled } from "./styles/BlogStyled"

const BlogNav = () => {
  return (
    <BlogNavStyled>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Sobre
        </li>
      </ul>
      <BlogPostSeparatorStyled />
    </BlogNavStyled>
  )
}

export default BlogNav
