import * as React from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import InitialInfo from "./components/InitialInfo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GlobalStyle } from "./styles/styleComponents/GlobalStyle";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Nav from "./components/Nav";

const App = () => {
  const [theme, setTheme] = React.useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
      <footer>
        <h4>Foco, Trabalho&Disciplina</h4>
        <p>
          Site criado por{" "}
          <a
            href="https://github.com/Danilo-Vicentin-Silva"
            rel="nofollow"
            target="_blank"
          >
            mim
          </a>
        </p>
      </footer>
    </ThemeProvider>
  );
};

export default App;
