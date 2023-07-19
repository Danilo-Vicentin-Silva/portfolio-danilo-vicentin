import { Button } from "@mui/material";
import DaniloImg from "../images/danilo.webp";
import DaniloCV from "../pdfs/danilo-vicentin-s-cv.pdf";
import { InitialInfoStyle } from "../styles/style";

const InitialInfo = () => {
  return (
    <InitialInfoStyle>
      <img src={DaniloImg} alt="Danilo Vicentin da Silva" />
      <article>
        <h2>
          Olá, meu nome é <br /> Danilo Vicentin da Silva <br />{" "}
          <small>Desenvolvedor Web</small>
        </h2>
        <Button variant="contained" id="download-cv-button">
          <a href={DaniloCV} download rel="nofollow" target="_blank">
            Baixe meu currículo!
          </a>
        </Button>
      </article>
    </InitialInfoStyle>
  );
};

export default InitialInfo;
