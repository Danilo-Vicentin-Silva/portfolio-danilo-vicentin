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

  .nav-button {
    font-size: 0.7em;
    padding: 15px;
    height: 10px;
    margin: 7px;
  }
`;
export const AboutMeStyle = styled.section`
  text-align: justify;
`;

export const TopicSeparatorStyle = styled.div`
  h3 {
    font-size: 1.2em;
    margin: 5px 0 0 0;
  }
  hr {
    display: inline-block;
    width: 50vw;
    margin: 0 0 5px 0;
  }
`;

export const SKillsStyled = styled.section``;

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
