import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

  @media (min-width: 768px) {
    font-size: 1.5em;

    margin-top: 30px;

    gap: 50px;
  }
`;
