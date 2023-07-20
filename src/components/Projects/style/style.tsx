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

  @media (min-width: 768px) {
    ul {
      gap: 20px;
    }
  }
`;

export const ProjectSection = styled.section`
  @keyframes card-entry {
    0% {
      transform: scale(0);
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      transform: scale(1);
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes shadow-drop-2-center {
    0% {
      transform: translateZ(0) scale(1);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateZ(50px) scale(1.05);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }

  margin: 10px 0;

  position: relative;

  cursor: pointer;

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

    z-index: 1;
  }

  #info {
    font-size: 2em;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: absolute;
    top: 50%;
    left: 0;

    @media (min-width: 768px) {
      animation: tracking-in-expand 0.7s 1s cubic-bezier(0.215, 0.61, 0.355, 1)
        both;
    }
  }

  @media (min-width: 768px) {
    width: 30vw;

    animation: card-entry 1s ease-in-out;

    img {
      width: 30vw;
      height: 26vh;
    }

    h4 {
      animation: text-focus-in 1s 5ms cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    img:hover {
      border: 1px solid ${(props) => props.theme.colors.primary};

      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    }
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
