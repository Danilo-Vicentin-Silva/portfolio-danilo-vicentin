import styled from "styled-components";

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
`;
