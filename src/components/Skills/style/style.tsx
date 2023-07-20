import styled from "styled-components";

export const SKillsStyled = styled.section`
  margin: auto;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  ul {
    text-align: center;
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0;
  }

  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;

export const SkillCard = styled.div`
  @keyframes flip-all {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @keyframes flip-rigth {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  @keyframes text-expand {
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
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  font-size: 0.8em;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 50%;

  height: 95px;
  width: 95px;
  padding: 10px;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    font-size: 2.8em;
  }
  #back-card {
    position: absolute;
    opacity: 0;
  }

  @media (min-width: 768px) {
    animation: flip-all 1s ease-in-out;

    :hover {
      animation: flip-rigth 1s ease-in-out;

      #front-card {
        animation: hide 0.5s ease-in-out forwards;
      }

      #back-card {
        font-size: 0.8em;

        width: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        animation: text-expand 1s 1s ease-in-out forwards;
      }
    }
  }
`;
