import AboutMe from "../components/AboutMe/components/AboutMe";
import InitialInfo from "../components/InitialInfo/components/InitialInfo";
import Skills from "../components/Skills/components/Skills";
import Nav from "../components/Nav/components/Nav";
import Projects from "../components/Projects/components/Projects";
import ContactForm from "../components/Contacts/components/ContactForm";
import Footer from "../components/Footer/components/Footer";
import Header from "../components/Header/components/Header";
import useTheme from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const Home = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={switchTheme} />
      <main>
        <InitialInfo />
        <Nav />
        <AboutMe />
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contacts">
        <ContactForm />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
