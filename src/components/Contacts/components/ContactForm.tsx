import * as React from "react"
import emailjs from "@emailjs/browser"
import { Alert, Button, TextField } from "@mui/material"
import { ContactFormStyle } from "../style/style"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import { useTranslation } from "react-i18next"

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
        .then(() => {
          handleSetSendStatus()
          setName("")
          setEmail("")
          setMessage("")
        })
        .catch(() => {
          handleSetErrorStatus()
        })
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

  const { t } = useTranslation()

  return (
    <ContactFormStyle>
      <TopicSeparator title={t("contactMe")} />
      <form onSubmit={sendEmail}>
        <div className="custom-input">
          <input
            type="text"
            id="input1"
            placeholder=" "
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="input1">{t("yourName")}</label>
        </div>

        <div className="custom-input">
          <input
            type="text"
            id="input2"
            placeholder=" "
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="input2">Email</label>
        </div>

        <div className="custom-input">
          <textarea
            id="textarea1"
            placeholder={t("yourMessage")}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="textarea1"></label>
        </div>
        <div>
          <Button
            id="reset-button"
            type="reset"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            {t("clear")}
          </Button>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            {t("send")}
          </Button>
        </div>
      </form>
      {sendStatus == true && (
        <Alert variant="filled" severity="success" className="notification">
          {t("successMessage")}
        </Alert>
      )}
      {errorStatus === true && (
        <Alert variant="filled" severity="error" className="notification">
          {t("unsessessMessage")}
        </Alert>
      )}
    </ContactFormStyle>
  )
}

export default ContactForm
