import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 10px;

  #contact-button {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
  }

  .nav-button {
    text-align: justify;
    font-size: 0.6em;
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.secundary};
  }
`;
