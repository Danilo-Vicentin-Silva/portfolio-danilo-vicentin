import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import InitialInfo from "./components/InitialInfo"
import { HomeStyle } from "./styleComponents/HomeStyle"


const App = () => {
	return (
		<HomeStyle>
			<Header />
      <main>
        <InitialInfo />
        <AboutMe />
      </main>
		</HomeStyle>
	)
}

export default App
