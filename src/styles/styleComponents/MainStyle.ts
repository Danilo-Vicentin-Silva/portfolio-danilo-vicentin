import styled from "styled-components";

export const InitialInfoStyle = styled.section`
  img {
    border-radius: 50%;
    width: 120px;
  }
  #cv-section {
    font-size: 0.5em;
    text-align: justify;
    display: grid;
    grid-template-columns: 125px auto;
  }
  #download-cv-button {
    background-color: ${(props) => props.theme.colors.primary};
  }
  #download-cv-button a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
  }
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 10px;

  #contact-button {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
  }

  .nav-button {
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.secundary};
    font-size: 0.7em;
    padding: 15px;
    height: 10px;
    margin: 7px;
  }
`;
export const AboutMeStyle = styled.section`
  p {
    text-align: justify;
    margin: 10px;
  }
`;

export const TopicSeparatorStyle = styled.div`
  color: ${(props) => props.theme.colors.secundary};

  h3 {
    font-size: 1.2em;
    margin: 5px 0 0 0;
  }
  hr {
    background-color: ${(props) => props.theme.colors.secundary};
    display: inline-block;
    height: 1px;
    border: none;
    width: 50vw;
  }
`;

export const SKillsStyled = styled.section`
  ul {
    text-align: center;
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 10px;
    padding: 0;
  }

  ul > li {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};

    border-radius: 50%;
    padding: 30px;
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
  margin: 10px 0;

  position: relative;

  img {
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 7px 20px;

    width: 300px;
  }

  h4 {
    color: white;
    font-size: 1.5em;
    text-decoration: overline;
    text-shadow: 0px 0px 20px black;

    position: absolute;
    top: 5%;
    left: 30%;
  }
`;

export const ProjectCard = styled.article`
  background-color: ${(props) => props.theme.colors.primary};

  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 7px 20px;
  height: 95vh;
  width: 95vw;
  margin: auto;
  box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.75);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  h4 {
    font-size: 2em;
    text-align: justify;
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
`;

export const ContactFormStyle = styled.section`
  .notification {
    display: inline-block;
    position: absolute;
    text-align: center;
    right: 30px;
    top: 1800px;
  }
`;
