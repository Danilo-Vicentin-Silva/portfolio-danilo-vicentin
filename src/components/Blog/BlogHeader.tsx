import DaniloImg from "../../assets/images/danilo.webp"
import { BlogHeaderStyled } from "./styles/BlogStyled"

const BlogHeader = () => {
  return (
    <BlogHeaderStyled>
      <h1>Blog</h1>
      <img src={DaniloImg} alt="Danilo Vicentin da Silva" />
      <h2>Danilo Vicentin S</h2>
      <p id="about-me-p">
        <small>
          <a href="https://www.instagram.com/danilo_vicentin_silva/">
            @danilo_vicentin_silva
          </a>
        </small>
      </p>
      <p>
        Desenvolvedor de Sites focado em criar as melhores soluções web.
        Brasileiro, nascido em Campinas-SP e focando sempre em aprender mais e mais dentro da minha área,
        onde todos os dias surge uma tecnologia nova. Sempre busco melhorar e
        dar meu máximo para qualquer que seja o projeto/trabalho. Foco, Trabalho
        & Disciplina são os meus objetivos enquanto trabalho, estudo e crio.
      </p>
    </BlogHeaderStyled>
  )
}

export default BlogHeader
