import { BlogNavStyled, BlogPostSeparatorStyled } from "./styles/BlogStyled"

const BlogNav = () => {
  return (
    <BlogNavStyled>
      <ul>
        <li>
          <a href="/" rel="prev" target="_self">
            Home
          </a>
        </li>
        <li>
          <button
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Sobre
          </button>
        </li>
      </ul>
      <BlogPostSeparatorStyled />
    </BlogNavStyled>
  )
}

export default BlogNav
