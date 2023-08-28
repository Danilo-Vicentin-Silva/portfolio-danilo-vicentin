import Project from "./Project";
import { v4 as uuid } from "uuid";
import {
  CordelModernoImages,
  RacingF1Images,
  SiteAndroidImages,
  TaskListImages,
  TelaLoginImages,
} from "../../Imports/importImages";
import { videos } from "../../Imports/ImportVideos";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineHtml, MdCss } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator";
import { ProjectsStyled } from "../style/style";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <ProjectsStyled>
      <TopicSeparator title={t("projectsTitle")} />
      <h4>{t("highlights")}</h4>

      <ul>
        <Project
          title="Racing F1"
          date={t("racingF1Date")}
          description={t("racingF1Description")}
          images={RacingF1Images}
          skillsUsed={[<IoLogoJavascript />, <MdOutlineHtml />, <MdCss />]}
          websiteLink="https://danilo-vicentin-silva.github.io/RacingF1/"
          githubLink="https://github.com/Danilo-Vicentin-Silva/RacingF1"
          video={videos.RacingF1Video}
          key={uuid()}
        />
        <Project
          title="Task List"
          date={t("taskListDate")}
          description={t("taskListDescription")}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Task-list"
          websiteLink="https://danilotasklist.netlify.app/"
          images={TaskListImages}
          skillsUsed={[
            <BiLogoReact />,
            <IoLogoJavascript />,
            <MdCss />,
            <MdOutlineHtml />,
          ]}
          video={videos.TaskListVideo}
          key={uuid()}
        />
        <Project
          title={t("loginScreenTitle")}
          description={t("loginScreenDescription")}
          date={t("loginScreenDate")}
          skillsUsed={[<MdOutlineHtml />, <MdCss />, <IoLogoJavascript />]}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Tela-Login"
          websiteLink="https://danilo-vicentin-silva.github.io/Tela-Login/"
          images={TelaLoginImages}
          video={videos.TelaLoginVideo}
          key={uuid()}
        />
      </ul>
      <h4>{t("moreProjects")}</h4>
      <ul>
        <Project
          title={t("brazilianCordelTitle")}
          description={t("brazilianCordelDescription")}
          date={t("brazilianCordelDate")}
          skillsUsed={[<MdOutlineHtml />, <MdCss />]}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Cordel-Moderno"
          websiteLink="https://danilo-vicentin-silva.github.io/Cordel-Moderno/"
          images={CordelModernoImages}
          video={videos.CordelModernoVideo}
          key={uuid()}
        />
        <Project
          title={t("websiteAndroidTitle")}
          description={t("websiteAndroidDescription")}
          date={t("websiteAndroidDate")}
          githubLink="https://github.com/Danilo-Vicentin-Silva/Site-Android"
          websiteLink="https://danilo-vicentin-silva.github.io/Site-Android/"
          skillsUsed={[<MdOutlineHtml />, <MdCss />]}
          images={SiteAndroidImages}
          video={videos.SiteAndroidVideo}
          key={uuid()}
        />
      </ul>
    </ProjectsStyled>
  );
};

export default Projects;
