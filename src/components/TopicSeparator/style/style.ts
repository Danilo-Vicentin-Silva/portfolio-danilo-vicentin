import styled from "styled-components";

export const TopicSeparatorStyled = styled.section`
  color: ${(props) => props.theme.colors.secundary};

  hr {
    border-color: ${(props) => props.theme.colors.secundary};
  }

  @media (min-width: 768px) {
    text-align: center;

    margin: auto;
    width: 50vw;
  }
`;
