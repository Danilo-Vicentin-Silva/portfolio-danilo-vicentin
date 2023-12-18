import Footer from "../components/Footer/components/Footer"
import Header from "../components/Header/components/Header"
import useTheme from "../hooks/useTheme"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Main from "../components/Main/Main"

const Home = () => {
  const { theme, switchTheme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={switchTheme} />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
