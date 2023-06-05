import AboutMe from "./components/AboutMe"
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
				<Skills />
				<Projects />
			</main>
		</HomeStyle>
	)
}

export default App
