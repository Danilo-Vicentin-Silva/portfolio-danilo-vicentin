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

  ul > li:hover {
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.75);
    transition: 0.5s;
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

export const ProjectsStyled = styled.section``;

export const ContactFormStyle = styled.section`
  .notification {
    display: inline-block;
    position: absolute;
    text-align: center;
    right: 30px;
    top: 1800px;
  }
`;
