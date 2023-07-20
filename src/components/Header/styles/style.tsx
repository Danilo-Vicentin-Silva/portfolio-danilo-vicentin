import styled from "styled-components";

export const HeaderStyled = styled.header`
  text-align: right;
  height: 40px;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    left: 10;
    bottom: 0;
  }
`;
