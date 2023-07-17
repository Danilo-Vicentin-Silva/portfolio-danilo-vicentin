import styled from "styled-components";

export const ContactsStyled = styled.section`
  ul {
    list-style: none;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin: 0;
    padding: 0;
  }

  ul a {
    text-decoration: none;
  }
`;

export const ContactStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;

  #icon {
    text-align: center;
    background-color: ${(props) => props.theme.colors.primary};

    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: 5px;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: white;
  }

  span {
    font-size: 2em;
  }

  p {
    text-align: center;
    margin: 0;
  }
`;

export const ContactFormStyle = styled.section`
  .notification {
    display: inline-block;
    position: absolute;
    text-align: center;
    right: 30px;
    top: 1800px;
  }

  form {
    background-color: ${(props) => props.theme.colors.tertiary};
    color: white;
    text-align: center;

    margin: 20px;
    padding: 10px;
    border-radius: 7px;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  #reset-button {
    margin-right: 10px;
  }
`;
