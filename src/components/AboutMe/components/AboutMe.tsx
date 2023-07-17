import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { AboutMeStyle } from "../style/style";

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <TopicSeparator title="Sobre Mim" />
      <p>
        <strong>Desenvolvedor Web Front End</strong> focado em oferecer as
        melhores soluções web! Sempre utilizando as melhores técnicas e
        tecnologias do mercado, meu fluxo de trabalho é{" "}
        <strong>rápido e focado</strong>, busco entender os objetivos e
        necessidades do cliente/empresa de modo a garantir que o website fique
        100% fiel a sua ideia. Sou capaz de desenvolver toda parte frontend,
        desde o protótipo, até a conclusão da interface de usuário.
      </p>
    </AboutMeStyle>
  );
};

export default AboutMe;
