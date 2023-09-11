import * as React from "react"
import dark from "../styles/themes/dark.ts"
import light from "../styles/themes/light.ts"

const useTheme = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") === "light" ? dark : light
  )
  const switchTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
    localStorage.setItem("theme", theme.title)
  }

  return { theme, switchTheme }
}

export default useTheme
