import DaniloImg from "../assets/images/danilo.webp"
import DaniloCV from "../assets/pdfs/cv-danilo-vicentin-silva.pdf"
import Button from "@mui/material/Button"
import { InitialInfoStyle } from "../styleComponents/MainStyle"


const InitialInfo = () => {
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
				<Button variant="outlined">Habilidades</Button>
				<Button variant="contained">Contato</Button>
				<Button variant="outlined">Projetos</Button>
			</section>
		</InitialInfoStyle>
	)
}

export default InitialInfo
