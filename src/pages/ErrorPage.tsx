import { useTranslation } from "react-i18next"
import { ErrorPageStyle } from "../styles/ErrorPageStyle"
import { Button } from "@mui/material"
import useTheme from "../hooks/useTheme"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"

const ErrorPage = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorPageStyle>
        <h1>Error 404!!</h1>
        <p>
          <Button variant="contained">
            <a
              href="/"
              rel="noreferrer nofollow"
              target="_self"
              aria-label="Volte para a Pagina Principal"
            >
              {t("mainPage")}
            </a>
          </Button>
        </p>
      </ErrorPageStyle>
    </ThemeProvider>
  )
}

export default ErrorPage
