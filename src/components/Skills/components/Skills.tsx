import {
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoGit,
  BiLogoReact,
  BiLogoHtml5,
  BiSearch,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { SKillsStyled } from "../style/style";

const Skills = () => {
  return (
    <SKillsStyled>
      <TopicSeparator title="Habilidades" />
      <ul>
        <li>
          <span>
            React <br />
            <BiLogoReact size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            Typescript <br />
            <BiLogoTypescript size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            Javascript <br />
            <RiJavascriptFill size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            HTML5 <br />
            <BiLogoHtml5 size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            CSS3 <br />
            <BiLogoCss3 size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            SEO <br />
            <BiSearch size={"50px"} />
          </span>
        </li>
        <li>
          <span>
            GIT <br />
            <BiLogoGit size={"50px"} />
          </span>
        </li>
      </ul>
    </SKillsStyled>
  );
};
export default Skills;
