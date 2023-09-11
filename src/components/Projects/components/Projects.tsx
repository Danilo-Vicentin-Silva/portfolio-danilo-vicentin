import Project from "./Project"
import { v4 as uuid } from "uuid"
import RacingF1Cover from "../../../assets/images/project-covers/racing-f1.webp"
import TaskListCover from "../../../assets/images/project-covers/task-list.webp"
import CordelModernoCover from "../../../assets/images/project-covers/modern-cordel.webp"
import SiteAndroidCover from "../../../assets/images/project-covers/android-site.webp"
import LoginScreenCover from "../../../assets/images/project-covers/login-screen.webp"
import { videos } from "../../Imports/ImportVideos"
import { IoLogoJavascript } from "react-icons/io"
import { MdOutlineHtml, MdCss } from "react-icons/md"
import { BiLogoReact } from "react-icons/bi"
import TopicSeparator from "../../TopicSeparator/components/TopicSeparator"
import { ProjectsStyled } from "../style/style"
import { useTranslation } from "react-i18next"

const Projects = () => {
  const { t } = useTranslation()

  return (
    <ProjectsStyled>
      <TopicSeparator title={t("projectsTitle")} />
      <h4>{t("highlights")}</h4>

      <ul>
        <Project
          title="Racing F1"
          date={t("racingF1Date")}
          description={t("racingF1Description")}
          image={RacingF1Cover}
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
          image={TaskListCover}
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
          image={LoginScreenCover}
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
          image={CordelModernoCover}
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
          image={SiteAndroidCover}
          video={videos.SiteAndroidVideo}
          key={uuid()}
        />
      </ul>
    </ProjectsStyled>
  )
}

export default Projects
