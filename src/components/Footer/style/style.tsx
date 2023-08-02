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
    animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const DesktopFooterStyled = styled.div`
  color: white;

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
