import styled from "styled-components";

export const AboutMeStyle = styled.section`
  p {
    text-align: justify;
    margin: 10px;
  }
  @media (min-width: 768px) {
    width: 60vw;
    margin: auto;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
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
  }
`;
