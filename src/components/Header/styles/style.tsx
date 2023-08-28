import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;

  width: 100%;
  z-index: 1;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
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
