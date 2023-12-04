import DaniloImg from "../../assets/images/danilo.webp"

const BlogHeader = () => {
  return (
    <article>
      <h1>Blog</h1>
      <img src={DaniloImg} alt="Danilo Vicentin da Silva" />
      <h2>Danilo Vicentin S</h2>
      <p>Desenvolvedor Web</p>
      <p>
        <small>
          <a href="https://www.instagram.com/danilo_vicentin_silva/">
            @danilo_vicentin_silva
          </a>
        </small>
      </p>
      <p>
        Desenvolvedor de Sites focado em criar as melhores soluções web. Foco,
        Trabalho & Disciplina são os meus objetivos enquanto trabalho, estudo e
        crio.
      </p>
    </article>
  )
}

export default BlogHeader
