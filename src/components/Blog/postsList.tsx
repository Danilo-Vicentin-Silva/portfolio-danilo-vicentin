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
    title: "3 tendências de programação para 2024",
    author: "@danilo_vicentin_silva",
    text: "A programação é uma área em constante evolução, com novas tendências surgindo o tempo todo. Neste post, vamos explorar três tendências de programação que estão ganhando força em 2024. A inteligência artificial (IA) está se tornando cada vez mais importante na programação. IA pode ser usada para automatizar tarefas, melhorar a segurança e a confiabilidade dos sistemas, e criar novas funcionalidades. A computação em nuvem também está ganhando força na programação. Computação em nuvem permite que os desenvolvedores acessem recursos de computação, armazenamento e rede sem a necessidade de investir em hardware e infraestrutura. A internet das coisas (IoT) está conectando cada vez mais dispositivos à internet. IoT abre novas possibilidades para a programação, como criar sistemas de automação, monitoramento e segurança.",
    image: postsImages.trendsDev,
    date: "17 de Janeiro de 2024",
    tags: ["#programação", "#tendências", "#2024"],
  },
  {
    title: "Uma nova visão das IA´s",
    author: "@danilo_vicentin_silva",
    text: "Enquanto iniciava meus estudos de Programação, acontecia a ascensão das IA´s, então logo tive medo que elas substituíssem os devs, porém o efeito foi bem diferente do que imaginava. Com essa nova tecnologia, surgiram novas áreas, enquanto as vagas que estariam “ameaçadas”, se aproveitaram disso para aprimorar seu trabalho. Assim surgiram os Copilots, verdadeiros “ajudantes dos devs”",
    image: postsImages.IaNewVision,
    date: "15 de Janeiro de 2024",
    tags: ["#inteligenciaartificial"],
  },
  {
    title: "Desbravando os Benefícios de Ter um E-commerce",
    author: "@danilo_vicentin_silva",
    text: "Investir em um e-commerce oferece uma série de vantagens para empreendedores e consumidores. Estudando Web Development, entendi como uma loja virtual pode diminuir a despesas de qualquer loja e potencializar o alcance de uma loja com o poder da internet e um bom SEO/Marketing Digital.",
    image: postsImages.benefitsEcommerce,
    date: "12 de Janeiro de 2024",
    tags: ["#eCommerce", "#eCommerceWebsite", "#ecommercebrasil"],
  },
  {
    title: "Next.js, criando sites mais rápidos!",
    author: "@danilo_vicentin_silva",
    text: "Como sempre me mantive focado em estudar a tecnologia com maior potencial e modernidade, comecei meus intermináveis estudos sobre Next.js, um framework fullstack capaz de criar sites com a tecnologia SSR, que consiste em deixar o site já pré-renderizado no próprio servidor de hospedagem.",
    image: postsImages.nextjsBestTech,
    date: "11 de Janeiro de 2024",
    tags: ["#VantagensDoNextJS", "#ReactNoServidor", "#RenderizaçãoNoServidor"],
  },
  {
    title: "Princípios do Webdesign",
    author: "@danilo_vicentin_silva",
    text: "Lendo o livro Princípios do Web Design Maravilhoso, escrito por Jason Beaird e James George, eu finalmente consegui entender os pilares de um bom webdesign: Layout, Cores e Conteúdo/Tipografia. São elementos gráficos que contribuem de forma ativa para o sucesso de um site, por isso devem ser bem trabalhados e tudo deve ser fundamentado para que não existam elementos incongruentes com o tipo do site.",
    image: postsImages.webdesign,
    date: "10 de Janeiro de 2024",
    tags: ["#webdesign", "#book"],
  },
  {
    title: "Notion - uma nova forma de se organizar",
    author: "@danilo_vicentin_silva",
    text: "Sempre imaginei um aplicativo que poderia se comportar como um caderno físico, onde eu pudesse anotar tudo que quisesse, do jeito que eu quisesse. E depois de passar anos anotando em cadernos físicos, sempre com o medo de perde-los e levando vários nas costas, também com medo de ter problemas na coluna já com 21 anos, finalmente encontrei o que procurava: o Notion! Muito melhor que alternativas como o Microsoft OneNote ou até o bloco de notas, hoje, organizo e anoto tudo pelo Notion, onde poderei acessar todos os dados anotados em qualquer momento. Com ele, projetos se tornaram como livros, onde posso anotar tudo sobre e planejar cada passo, permitindo assim melhorar não “só” minha produtividade, mas minha organização em linhas gerais.",
    image: postsImages.NotionNewWayToOrganizate,
    date: "13 de dezembro de 2023",
    tags: ["#NotionProductivity", "#OrganizeWithNotion", "#Notion"],
  },
  {
    title: "Rotas Dinâmicas",
    author: "@danilo_vicentin_silva",
    text: "Estou estudando rotas dinâmicas, mas para o que isso serve? Simples, imagine que você precise criar uma página para cada produto da sua empresa? Seria quase impossível, por isso existem as rotas dinâmicas, aplicando isso Next.js, cada vez que surgir um novo produto no banco de dados da empresa, por exemplo, uma página para o produto será criada automaticamente e seguindo um modelo padrão.",
    image: postsImages.DynamicRoutes,
    date: "7 de dezembro de 2023",
    tags: ["#rotasdinamicas", "#nextjs"],
  },
  {
    title: "Meu primeiro post!",
    author: "@danilo_vicentin_silva",
    text: "É com muito entusiasmo que estou escrevendo esse primeiro post no meu primeiro blog! Nesse blog eu vou comentar um pouco sobre o meu trabalho e espero te convencer como ter um site nos dias de hoje é importante para seu negócio/empresa. Também vou contar sobre novas tecnologias que estou estudando para deixar os sites criados por mim cada vez mais poderosos e modernos! Por exemplo, sabia que eu consigo juntar Next.js, o framework Javascript mais poderoso do mercado com Wordpress para que você possa gerenciar todo o conteúdo de um site? Também vou contar um pouco nesse blog sobre os vários benefícios que sites criados por mim tem, afinal, sem um diferencial, meu trabalho fica sem valor algum em relação aos outros. Muito obrigado pela colaboração e espero que eu tenha chamado sua atenção! Entre em contato via Email ou Whatzapp para construir um site belíssimo para sua empresa/negócio!",
    date: "5 de dezembro de 2023",
    tags: ["#meuprimeiropost", "#blog"],
  },
]
