import { useTranslation } from "react-i18next"
import AboutMe from "../AboutMe/components/AboutMe"
import ContactForm from "../Contacts/components/ContactForm"
import Contacts from "../Contacts/components/Contacts"
import InitialInfo from "../InitialInfo/components/InitialInfo"
import Nav from "../Nav/components/Nav"
import Projects from "../Projects/components/Projects"
import Skills from "../Skills/components/Skills"
import TopicSeparator from "../TopicSeparator/components/TopicSeparator"

const Main = () => {
  const { t } = useTranslation()

  return (
    <main>
      <InitialInfo />
      <Nav />

      <TopicSeparator title={t("aboutMe")} />
      <AboutMe />

      <TopicSeparator title={t("skillsTitle")} id="skills" />
      <Skills />

      <TopicSeparator title={t("projectsTitle")} id="projects" />
      <Projects />

      <TopicSeparator title={t("contactMe")} id="contacts" />
      <ContactForm />
      <Contacts />
    </main>
  )
}

export default Main
