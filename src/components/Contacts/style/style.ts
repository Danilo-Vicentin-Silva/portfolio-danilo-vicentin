import styled from "styled-components"

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
`

export const ContactStyled = styled.li`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 7px;
  
  span {
    font-size: 2em;
  }
  hr {
    width: 100%;
  }
  a {
    color: #fff;
  }

  @keyframes shadow-drop-2-center {
    0% {
      transform: translateZ(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateZ(50px);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
`

export const ContactFormStyle = styled.section`
  .notification {
    font-size: 0.6em;

    width: 80%;
    align-items: center;

    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;

    transform: translate(-50%, -50%);
  }

  form {
    color: white;
    text-align: center;

    margin: 20px;
    padding: 10px;
    border-radius: 7px;
    border-color: white;

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;

    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .custom-input {
    position: relative;
    margin: 20px;
  }

  .custom-input input,
  .custom-input textarea {
    background-color: transparent;
    color: white;
    width: 200px;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    max-height: 120px; /* Altura máxima da textarea */
    overflow-y: auto; /* Adiciona uma barra de rolagem quando a altura máxima é atingida */
  }

  .custom-input input:focus,
  .custom-input textarea:focus {
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
    transition: 0.5s;
  }

  .custom-input textarea {
    max-width: 200px;
    height: 120px;
  }

  .custom-input label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: white;
    transition: transform 0.2s, font-size 0.2s;
  }

  .custom-input input:focus + label,
  .custom-input textarea:focus + label,
  .custom-input input:not(:placeholder-shown) + label,
  .custom-input textarea:not(:placeholder-shown) + label {
    transform: translateY(-200%);
    font-size: 12px;
    color: white;
  }

  .custom-input input:-webkit-autofill,
  .custom-input textarea:-webkit-autofill,
  .custom-input input:-webkit-autofill:hover,
  .custom-input textarea:-webkit-autofill:hover,
  .custom-input input:-webkit-autofill:focus,
  .custom-input textarea:-webkit-autofill:focus {
    background-color: transparent;
    background-image: none;
    color: inherit;
    border-radius: 0;
    box-shadow: none;
    transition: none;
  }

  .custom-input textarea {
    resize: none;
    background-color: #ffffff29;
  }

  #reset-button {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    margin: auto;
    width: 50vw;

    .notification {
      width: 25vw;
      top: 75%;

      transform: translate(-50%, -75%);
    }
  }

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`
