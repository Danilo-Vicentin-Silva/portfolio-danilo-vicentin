import styled from "styled-components";

export const InitialInfoStyle = styled.section`
  text-align: justify;
  font-size: 0.6em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  img {
    width: 30vw;
    border-radius: 50%;
    margin: 10px;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }

  #download-cv-button {
    background-color: ${(props) => props.theme.colors.primary};
  }
  #download-cv-button a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    font-size: 1em;
    gap: 30px;

    img {
      width: 15vw;
    }

    img:hover {
      -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
      transition: 0.5s;
    }

    #download-cv-button {
      font-size: 3em;

      opacity: 0;
      animation: imageTransition 0.5s ease-in-out 0.5s forwards;
    }

    .animated-text {
      overflow: hidden;
      white-space: nowrap;
      animation: writtingText 1s steps(20);
    }

    .image-transition {
      opacity: 0;
      animation: imageTransition 0.5s ease-in-out 0.5s forwards;
    }
  }

  @keyframes imageTransition {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes writtingText {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
