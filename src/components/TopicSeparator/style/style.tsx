import styled from "styled-components"

export const TopicSeparatorStyled = styled.section`
  color: ${(props) => props.theme.colors.secundary};

  hr {
    border-color: ${(props) => props.theme.colors.secundary};
    height: 1px;
  }

  @media (min-width: 768px) {
    text-align: center;

    margin: auto;
    width: 50vw;

    animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes text-pop-up-top {
    0% {
      transform: translateY(0);
      transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      transform: translateY(-10px);
      transform-origin: 50% 50%;
      text-shadow: 0 1px 0 #00000053, 0 2px 0 #00000053, 0 3px 0 #00000053;
    }
  }
`
