import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: 'Arvo', serif;
    color: ${(props) => props.theme.colors.text};

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
`
