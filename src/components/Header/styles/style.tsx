import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;

  width: 100%;
  z-index: 1;

  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
  }

  #logo {
    display: inline;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ToggleLanguageButtonStyle = styled.div`
  button {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5em;
    background: none;
    border: none;
  }

  button:hover {
    color: ${(props) => props.theme.colors.secundary};
  }
`;
