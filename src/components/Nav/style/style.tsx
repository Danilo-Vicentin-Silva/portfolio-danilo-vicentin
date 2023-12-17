import styled from "styled-components"

export const NavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px;

  .nav-button {
    text-align: justify;
    font-size: 0.6em;
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.secundary};
  }

  .contact-button {
    color: white;
    background-color: ${(props) => props.theme.colors.primary};
  }
  
  @media (min-width: 768px) {
    font-size: 1.5em;
    margin-top: 30px;
    gap: 50px;
  }
`
