import styled from "styled-components";

export const InitialInfoStyle = styled.section`
  img {
    border-radius: 50%;
    width: 110px;
  }
  #cv-section {
    font-size: 0.5em;
    text-align: justify;
    display: grid;
    grid-template-columns: 125px auto;
  }
  #download-cv-button {
    background-color: ${(props) => props.theme.colors.primary};
  }
  #download-cv-button a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
  }
`;
