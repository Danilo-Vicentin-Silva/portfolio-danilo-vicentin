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

  @media (min-width: 768px) {
    div:hover {
      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
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

  .custom-input label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: white;
    transition: transform 0.2s, font-size 0.2s;
  }

  .custom-input input:focus + label,
  .custom-input input:not(:placeholder-shown) + label {
    transform: translateY(-200%);
    font-size: 12px;
    color: white;
  }

  .custom-input input {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    width: 200px;
    padding: 10px;
    font-size: 16px;
    outline: none;
    caret-color: white;
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
