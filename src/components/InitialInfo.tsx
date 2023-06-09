import DaniloImg from "../assets/images/danilo.webp"
import DaniloCV from "../assets/pdfs/danilo-vicentin-s-cv.pdf"
import Button from "@mui/material/Button"
import { InitialInfoStyle } from "../styleComponents/MainStyle"

const InitialInfo = () => {
	const goToSection = (y: number) => {
		window.scrollTo(0, y)
	}

	return (
		<InitialInfoStyle>
			<picture>
				<source media="#" srcSet="#" type="image/webp" />
				<source media="#" srcSet="#" type="image/webp" />
				<img src={DaniloImg} alt="Danilo Vicentin da Silva" />
			</picture>
			<section>
				<h2>Olá, meu nome é Danilo Vicentin da Silva - Desenvolvedor Web</h2>
				<Button variant="contained">
					<a href={DaniloCV} download rel="nofollow" target="_blank">
						Baixe meu currículo!
					</a>
				</Button>
			</section>
			<section>
				<Button variant="outlined" onClick={() => goToSection(500)}>
					Habilidades
				</Button>
				<Button variant="contained" onClick={() => goToSection(1500)}>
					Contatos
				</Button>
				<Button variant="outlined" onClick={() => goToSection(900)}>
					Projetos
				</Button>
			</section>
		</InitialInfoStyle>
	)
}

export default InitialInfo
