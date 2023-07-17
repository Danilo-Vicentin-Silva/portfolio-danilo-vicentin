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
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.secundary};
    font-size: 0.7em;
    padding: 15px;
    height: 10px;
    margin: 7px;
  }
`;
