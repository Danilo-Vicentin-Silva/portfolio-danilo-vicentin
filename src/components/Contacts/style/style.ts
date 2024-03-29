import styled from "styled-components"

export const ContactsStyled = styled.section`
  margin: 20px 5px;

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

  @media (min-width: 768px) {
    ul {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`

export const ContactStyled = styled.li`
  margin: 5px;
  cursor: pointer;

  .span-contact {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .span-contact:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  span {
    font-size: 1.8em;
  }

  a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: none;
  }

  @media (min-width: 768px) {
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    font-size: 1em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }

    h3,
    p {
      margin: 7px;
    }
    span:hover {
      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
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

  h3 {
    text-align: center;
  }

  hr {
    width: 100%;
  }

  form {
    color: ${(props) => props.theme.colors.text};
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
    color: ${(props) => props.theme.colors.text};
    width: 200px;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    max-height: 120px;
    overflow-y: auto;
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
    color: ${(props) => props.theme.colors.text};
    transition: transform 0.2s, font-size 0.2s;
  }

  .custom-input input:focus + label,
  .custom-input textarea:focus + label,
  .custom-input input:not(:placeholder-shown) + label,
  .custom-input textarea:not(:placeholder-shown) + label {
    transform: translateY(-200%);
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
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
    background-color: ${(props) => props.theme.colors.background};
  }

  #reset-button {
    margin-right: 10px;
  }

  @media (min-width: 768px) {

    .custom-input input,
    .custom-input textarea {
      width: 400px;
      max-width: 400px;
    }

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
