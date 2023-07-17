import styled from "styled-components";

export const AboutMeStyle = styled.section`
  p {
    text-align: justify;
    margin: 10px;
  }
`;

export const TopicSeparatorStyle = styled.div`
  color: ${(props) => props.theme.colors.secundary};

  h3 {
    font-size: 1.2em;
    margin: 5px 0 0 0;
  }
  hr {
    background-color: ${(props) => props.theme.colors.secundary};
    display: inline-block;
    height: 1px;
    border: none;
    width: 50vw;
  }
`;
