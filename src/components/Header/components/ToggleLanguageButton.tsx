import { GiUsaFlag } from "react-icons/gi"
import { GiBrazilFlag } from "react-icons/gi"
import { ToggleLanguageButtonStyle } from "../styles/style"
import { useTranslation } from "react-i18next"

const languageOptions = [
  { name: "Portuguese", value: "ptBr", flag: <GiBrazilFlag /> },
  { name: "English", value: "en", flag: <GiUsaFlag /> },
]

const ToggleLanguageButton = () => {
  const { i18n } = useTranslation()

  return (
    <ToggleLanguageButtonStyle>
      {languageOptions.map((option) => (
        <button
          onClick={() => {
            i18n.changeLanguage(option.value)
            localStorage.setItem("language", option.value)
          }}
          aria-label={`Change language to ${option.flag}`}
          key={option.value}
        >
          {option.flag}
        </button>
      ))}
    </ToggleLanguageButtonStyle>
  )
}

export default ToggleLanguageButton
