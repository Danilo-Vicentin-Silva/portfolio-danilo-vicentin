import styled from "styled-components"

export const FooterStyled = styled.footer`
  font-size: 0.8em;
  background-color: ${(props) => props.theme.colors.primary};

  width: 100%;
  height: 50px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  bottom: 100;
  left: 0;

  img {
    width: 50px;
  }

  ul {
    list-style: none;
  }

  ul li {
    display: inline;
    margin-right: 10px;
  }

  a {
    color: white;
    text-decoration: overline;
  }

  @media (min-width: 768px) {
    height: auto;
  }
`

export const DesktopFooterStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;

  article {
    display: flex;
    justify-content: center;
    gap: 15px;

    width: 75vw;
  }

  h6 {
    font-size: 1em;
  }

  hr {
    display: block;
    width: 100%;
  }
`
