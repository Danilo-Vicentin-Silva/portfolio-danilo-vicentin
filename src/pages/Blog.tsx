import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from "../components/Header/components/Header"
import Footer from "../components/Footer/components/Footer"
import useTheme from "../hooks/useTheme"
import BlogNav from "../components/Blog/BlogNav"
import BlogHeader from "../components/Blog/BlogHeader"
import BlogPosts from "../components/Blog/BlogPosts"

const Blog = () => {
  const { theme, switchTheme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={switchTheme} />
      <main>
        <BlogHeader />
        <BlogNav />
        <section>
          <BlogPosts />
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Blog
