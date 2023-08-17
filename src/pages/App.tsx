import React from "react"
import AboutMe from "../components/AboutMe/components/AboutMe"
import InitialInfo from "../components/InitialInfo/components/InitialInfo"
import Skills from "../components/Skills/components/Skills"
import Nav from "../components/Nav/components/Nav"
import Projects from "../components/Projects/components/Projects"
import Contacts from "../components/Contacts/components/Contacts"
import ContactForm from "../components/Contacts/components/ContactForm"
import Footer from "../components/Footer/components/Footer"
import Header from "../components/Header/components/Header"
import { ThemeProvider } from "styled-components"
import light from "../styles/themes/light"
import dark from "../styles/themes/dark"

const App = () => {
  const [theme, setTheme] = React.useState(dark)
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <InitialInfo />
        <Nav />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
        <ContactForm />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
