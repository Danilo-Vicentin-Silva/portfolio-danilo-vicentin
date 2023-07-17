import styled from "styled-components";

export const ProjectsStyled = styled.section`
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    list-style: none;
    text-align: center;
    padding: 0;
  }

  .box {
    border-radius: 7px;
    width: 95vw;
    height: 180px;
    border: 1px solid black;
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const ProjectSection = styled.section`
  position: relative;
  margin: 10px 0;

  img {
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 7px 20px;

    width: 90vw;
  }

  h4 {
    color: white;
    font-size: 1.5em;
    text-decoration: overline;
    text-shadow: 0px 0px 20px black;

    width: 100%;
    position: absolute;
    top: 5%;
    left: 0%;
  }
`;

export const ProjectCard = styled.article`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};

  height: 95vh;
  width: 95vw;
  margin: 10px;

  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 7px 20px;
  box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.75);

  position: fixed;
  top: 0;
  left: 10;
  z-index: 1;

  h4 {
    font-size: 2em;
    text-align: justify;
    height: 0;
  }

  h5 {
    text-align: left;
    margin-left: 50px;
    height: 0;
    font-size: 0.5em;
  }

  #card-header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 70px;
  }

  hr {
    margin: 10px;
  }

  #skills-section {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 10px;
  }

  #skills-section span {
    font-size: 2em;
  }

  p {
    text-align: justify;
    margin: 15px;
  }

  .link-button {
    background-color: ${(props) => props.theme.colors.background};
    font-size: 0.7em;
    padding: 15px;
    height: 10px;
    width: 120px;
    margin: 7px;
  }

  .link-button a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
  }
`;
