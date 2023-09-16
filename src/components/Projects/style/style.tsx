import styled from "styled-components"

export const ProjectsStyled = styled.section`
  position: relative;

  h4 {
    margin: 5px;
  }

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
`

export const ProjectSection = styled.section`
  margin: 10px 0;
  position: relative;
  cursor: pointer;

  img {
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    border-radius: 7px 20px;

    width: 90vw;
  }

  img:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};

    animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
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
    color: white;
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
    }

    h4 {
      animation: text-focus-in 1s 5ms cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    #info:hover,
    h4:hover {
      color: ${(props) => props.theme.colors.secundary};
    }
  }

  @keyframes scale-up-center1 {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

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
`

export const ProjectCard = styled.article<{ imageUrl: string }>`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};

  overflow: hidden;
  width: 80vw;

  border-radius: 7px 20px;
  box-shadow: 0px 0px 300px 0px rgba(0, 0, 0, 0.75);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  #card-header {
    background: url(${(props) => props.imageUrl}) no-repeat;
    background-size: cover;

    height: 150px;
    padding: 15px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  #card-header span {
    font-size: 2em;
  }

  #card-header span:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  #card-header h4 {
    font-size: 1.2em;
  }

  #card-header h5 {
    color: #ffffffba;
    font-size: 0.6em;
    margin: 0;
    text-align: left;
    width: 100%;
    height: 0;
  }

  p {
    text-align: left;
    margin: 15px;
  }

  hr {
    width: 90%;
  }

  #skills-section ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    margin: 15px;
  }

  #skills-section ul li {
    background-color: ${(props) => props.theme.colors.tertiary};
    padding: 5px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.405);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.478);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.383);
  }

  #skills-section span {
    color: white;
  }

  #link-section {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    padding: 10px;
  }

  #link-section span {
    font-size: 1.5em;
  }

  #link-section a {
    color: ${(props) => props.theme.colors.tertiary};
  }

  #link-section a:hover {
    color: ${(props) => props.theme.colors.text};
  }

  @media (min-width: 768px) {
    width: 60vw;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 10px;

    top: 5%;
    left: 20%;

    animation: scale-up-center1 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    box-shadow: 0px 0px 300px -10px rgba(0, 0, 0, 0.75);

    video {
      z-index: -1;

      width: 105%;
      height: 350px;
      object-fit: cover;
    }

    #card-header {
      background: none;
      width: 95%;
      height: 0;

      display: flex;
      justify-content: space-between;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
    }

    #card-header h4,
    h5 {
      background-color: #00000079;
      padding: 10px;
      border-radius: 7px;
    }

    #card-header span {
      background-color: #0000003e;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px;
      border-radius: 100%;
    }

    p {
      width: 50%;
      margin: 0;
    }

    #link-section {
      width: 90%;
    }

    @media (min-width: 1990px) {
      max-width: 70vw;
      max-height: 70vh;
    }
  }

  @keyframes scale-up-center1 {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

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
`
