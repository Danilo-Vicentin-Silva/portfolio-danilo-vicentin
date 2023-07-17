import styled from "styled-components";

export const SKillsStyled = styled.section`
  ul {
    text-align: center;
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 10px;
    padding: 0;
  }

  ul > li {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};

    border-radius: 50%;
    padding: 30px;
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
