import styled from "styled-components";

export const InitialInfoStyle = styled.section`
  text-align: justify;
  font-size: 0.6em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;

  img {
    width: 30vw;
    border-radius: 50%;
  }

  #download-cv-button {
    background-color: ${(props) => props.theme.colors.primary};
  }
  #download-cv-button a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    font-size: 1em;
    gap: 40px;

    #download-cv-button {
      font-size: 3em;
    }
  }
`;
