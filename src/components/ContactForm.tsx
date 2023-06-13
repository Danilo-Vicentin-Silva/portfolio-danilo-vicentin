import * as React from "react"
import emailjs from "@emailjs/browser"
import { Alert } from "@mui/material"
import { ContactFormStyle } from "../styles/styleComponents/MainStyle"

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

	return (
		<ContactFormStyle>
			<h3>Converse comigo</h3>
			<form onSubmit={sendEmail}>
				<div>
					<label htmlFor="name">Seu nome:</label>
					<input
						type="text"
						name="nome"
						id="nome"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Seu email:</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="text-area">Sua mensagem:</label>
					<textarea
						name="text-area"
						id="text-area"
						cols={30}
						rows={10}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<div>
					<input type="submit" value="Enviar email" />
					<input type="reset" value="Limpar campos" />
				</div>
			</form>
			{sendStatus == true && (
				<Alert variant="filled" severity="success" className="notification">
					MENSAGEM ENVIADA COM SUCESSO!
				</Alert>
			)}
			{errorStatus == true && (
				<Alert variant="filled" severity="error" className="notification">
					PREENCHA TODOS OS CAMPOS CORRETAMENTE!
				</Alert>
			)}
		</ContactFormStyle>
	)
}

export default ContactForm
