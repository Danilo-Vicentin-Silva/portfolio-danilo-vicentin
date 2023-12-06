import { Link } from "react-router-dom"
import { BlogNavStyled, BlogPostSeparatorStyled } from "./styles/BlogStyled"

const BlogNav = () => {
  return (
    <BlogNavStyled>
      <ul>
        <li>
          <Link to="/" rel="prev" target="_self">
            Home
          </Link>
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
