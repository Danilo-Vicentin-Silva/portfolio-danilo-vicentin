interface PostProps {
  title: string
  author: string
  text: string
  image?: string
  date: string
  tags: string[]
}

import { postsImages } from "../../Imports/ImportPosts"

export const posts: PostProps[] = [
  {
    title: "Meu primeiro post!",
    author: "@danilo_vicentin_silva",
    text: "É com muito entusiasmo que estou escrevendo esse primeiro post no meu primeiro blog! Nesse blog eu vou comentar um pouco sobre o meu trabalho e espero te convencer como ter um site nos dias de hoje é importante para seu negócio/empresa. Também vou contar sobre novas tecnologias que estou estudando para deixar os sites criados por mim cada vez mais poderosos e modernos! Por exemplo, sabia que eu consigo juntar Next.js, o framework Javascript mais poderoso do mercado com Wordpress para que você possa gerenciar todo o conteúdo de um site? Também vou contar um pouco nesse blog sobre os vários benefícios que sites criados por mim tem, afinal, sem um diferencial, meu trabalho fica sem valor algum em relação aos outros. Muito obrigado pela colaboração e espero que eu tenha chamado sua atenção! Entre em contato via Email ou Whatzapp para construir um site belíssimo para sua empresa/negócio!",
    date: "5 de dezembro de 2023",
    tags: ["#meuprimeiropost", "#blog"],
  },
  {
    title: "Rotas Dinâmicas",
    author: "@danilo_vicentin_silva",
    text: "Estou estudando rotas dinâmicas, mas para o que isso serve? Simples, imagine que você precise criar uma página para cada produto da sua empresa? Seria quase impossível, por isso existem as rotas dinâmicas, aplicando isso Next.js, cada vez que surgir um novo produto no banco de dados da empresa, por exemplo, uma página para o produto será criada automaticamente e seguindo um modelo padrão.",
    image: postsImages.DynamicRoutes,
    date: "7 de dezembro de 2023",
    tags: ["#rotasdinamicas", "#nextjs"],
  },
]
