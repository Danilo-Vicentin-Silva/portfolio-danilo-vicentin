import { FooterStyled } from "../style/style"
import Logo from "../../../assets/images/logo.webp"
import DesktopFooter from "./DesktopFooter"
import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleRezise = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleRezise)

    return () => {
      window.removeEventListener("resize", handleRezise)
    }
  })

  return (
    <FooterStyled>
      {windowWidth >= 768 && <DesktopFooter />}
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a
            href="mailto:danilovicentindasilva@gmail.com"
            rel="nofollow"
            target="_blank"
          >
            Email
          </a>
        </li>
        <li>
          <Link to={"/blog"} rel="next" target="_self">
            Blog
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danilo-vicentin-da-silva-16a84022b/"
            rel="nofollow"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Danilo-Vicentin-Silva"
            rel="nofollow"
            target="_blank"
          >
            Github
          </a>
        </li>
      </ul>
    </FooterStyled>
  )
}

export default Footer
