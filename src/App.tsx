import * as React from "react";
import AboutMe from "./components/AboutMe/components/AboutMe";

import Header from "./components/Header/components/Header";
import InitialInfo from "./components/InitialInfo/components/InitialInfo";

import Skills from "./components/Skills/components/Skills";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Nav from "./components/Nav/components/Nav";
import Projects from "./components/Projects/components/Projects";
import Contacts from "./components/Contacts/components/Contacts";
import ContactForm from "./components/Contacts/components/ContactForm";

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
