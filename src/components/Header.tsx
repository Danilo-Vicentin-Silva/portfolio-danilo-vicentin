import { HeaderStyle } from "../styleComponents/HeaderStyle"
import ToggleThemeButton from "./ToggleThemeButton"

const Header = () => {
	return (
		<HeaderStyle>
			<section id="hidden-header">
				<h1>
					Portfólio sobre{" "}
					<a
						href="https://github.com/Danilo-Vicentin-Silva"
						rel="nofollow"
						target="_blank"
					>
						Danilo Vicentin da Silva (Dev)
					</a>
					, programador em desenvolvimento web
				</h1>
				<p>
					Hard Skills, Soft Skills, projetos realizados e formas de contato.
				</p>
				<ul>
					<li>
						<a
							href="https://github.com/Danilo-Vicentin-Silva"
							rel="nofollow"
							target="_blank"
						>
							Github
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
							rel="nofollow"
							target="_blank"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="mailto:Danilovicentindasilva@gmail.com?"
							rel="nofollow"
							target="_blank"
						>
							Email
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/danilo_vicentin_silva/"
							rel="nofollow"
							target="_blank"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/profile.php?id=100092172424197"
							rel="nofollow"
							target="_blank"
						>
							Facebook
						</a>
					</li>
				</ul>
			</section>

			<ToggleThemeButton sx={{ m: 1 }} defaultChecked />
		</HeaderStyle>
	)
}

export default Header
