import styled from "styled-components";

export const ContactFormStyle = styled.section`
  .notification {
    display: inline-block;
    position: absolute;
    text-align: center;
    right: 30px;
    top: 1800px;
  }
`;

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
  li > a {
    color: white;
    text-align: center;
    background-color: ${(props) => props.theme.colors.primary};

    border-radius: 50%;
    padding: 10px;
    height: 50px;
    width: 50px;

    text-decoration: none;
  }
`;

export const ContactStyled = styled.div`
  
`
