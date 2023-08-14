import * as React from "react"
import emailjs from "@emailjs/browser"
import { Alert, Button, TextField } from "@mui/material"
import { ContactFormStyle } from "../style/style"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import useVisibleElement from "../../../hooks/useAnimation"
import useAnimation from "../../../hooks/useAnimation"

const ContactForm = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [sendStatus, setSendStatus] = React.useState(false)
  const [errorStatus, setErrorStatus] = React.useState(false)

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (name === "" || email === "" || message === "") {
      handleSetErrorStatus()
    } else {
      const templateParams = {
        from_name: name,
        message: message,
        email: email,
      }
      emailjs
        .send(
          "service_ytp2g72",
          "template_j7rqm9o",
          templateParams,
          "wIQCNcAh30t4NsnyC"
        )
        .then(
          () => {
            handleSetSendStatus()
            setName("")
            setEmail("")
            setMessage("")
          },
          (error) => console.error(error)
        )
    }
  }

  const handleSetSendStatus = () => {
    setSendStatus(true)
    setTimeout(() => {
      setSendStatus(false)
    }, 2500)
  }

  const handleSetErrorStatus = () => {
    setErrorStatus(true)
    setTimeout(() => {
      setErrorStatus(false)
    }, 2500)
  }

  const { elementRef, isVisible } = useAnimation()

  return (
    <ContactFormStyle ref={elementRef}>
      {isVisible && (
        <>
          <TopicSeparator title="Fale Comigo!" />
          <form onSubmit={sendEmail}>
            <div>
              <TextField
                label="Seu Nome"
                variant="filled"
                name="name"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="email"
                name="email"
                id="email"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                name="message"
                id="message"
                label="Sua Mensagem"
                multiline
                rows={7}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <Button
                id="reset-button"
                type="reset"
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Limpar
              </Button>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Enviar
              </Button>
            </div>
          </form>
          {sendStatus == true && (
            <Alert variant="filled" severity="success" className="notification">
              MENSAGEM ENVIADA COM SUCESSO!
            </Alert>
          )}
          {errorStatus === true && (
            <Alert variant="filled" severity="error" className="notification">
              PREENCHA TODOS OS CAMPOS CORRETAMENTE!
            </Alert>
          )}
        </>
      )}
    </ContactFormStyle>
  )
}

export default ContactForm
