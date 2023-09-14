import styled from "styled-components"

export const AboutMeStyle = styled.section`
  p {
    text-align: justify;
    word-spacing: 7px;
    margin: 10px;
  }
  @media (min-width: 768px) {
    width: 60vw;
    margin: auto;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    p {
      animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
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
`

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
  }
`
