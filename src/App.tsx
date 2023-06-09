import AboutMe from "./components/AboutMe"
import ContactForm from "./components/ContactForm"
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import InitialInfo from "./components/InitialInfo"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { HomeStyle } from "./styleComponents/HomeStyle"

const App = () => {
	return (
		<HomeStyle>
			<Header />
			<main>
				<InitialInfo />
				<AboutMe />
				<Skills/>
				<Projects />
				<Contacts />
				<ContactForm />
			</main>
			<footer>
				<h4>Foco, Trabalho&Disciplina</h4>
				<p>
					Site criado por{" "}
					<a href="#" rel="nofollow" target="_blank">
						mim
					</a>
				</p>
			</footer>
		</HomeStyle>
	)
}

export default App
