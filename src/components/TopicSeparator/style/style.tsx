import styled from "styled-components"

export const TopicSeparatorStyled = styled.section`
  color: ${(props) => props.theme.colors.secundary};
  text-align: center;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  margin-left: 5px;

  h3 {
    display: flex;
    justify-self: center;
    margin: 50px 0 0 0;
    margin-top: 50px;
  }

  hr {
    display: inline;
    margin: 0;
    border-color: ${(props) => props.theme.colors.secundary};
    width: 150px;
  }

  @media (min-width: 768px) {
    h3 {
      text-align: center;
      animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
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
      text-shadow: 0 1px 0 #00000025, 0 2px 0 #00000027, 0 3px 0 #0000004d,
        0 4px 0 #00000062;
    }
  }
`
