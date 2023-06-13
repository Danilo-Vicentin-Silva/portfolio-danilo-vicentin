import { Button } from "@mui/material"
import DaniloImg from "../assets/images/danilo.webp"
import DaniloCV from "../assets/pdfs/danilo-vicentin-s-cv.pdf"
import { InitialInfoStyle } from "../styles/styleComponents/MainStyle"

const InitialInfo = () => {
	return (
		<InitialInfoStyle>
			<section id="cv-section">
				<picture>
					<source media="#" srcSet="#" type="image/webp" />
					<source media="#" srcSet="#" type="image/webp" />
					<img src={DaniloImg} alt="Danilo Vicentin da Silva" />
				</picture>
				<article>
					<h2>
						Olá, meu nome é <br /> Danilo Vicentin da Silva <br /> Desenvolvedor
						Web
					</h2>
					<Button variant="contained" id="download-cv-button">
						<a href={DaniloCV} download rel="nofollow" target="_blank">
							Baixe meu currículo!
						</a>
					</Button>
				</article>
			</section>
		</InitialInfoStyle>
	)
}

export default InitialInfo
