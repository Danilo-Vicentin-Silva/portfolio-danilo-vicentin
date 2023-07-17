import styled from "styled-components";

export const TopicSeparatorStyled = styled.section`
  color: ${(props) => props.theme.colors.secundary};

  hr {
    border-color: ${(props) => props.theme.colors.secundary};
  }
`;
