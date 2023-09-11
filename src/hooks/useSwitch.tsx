import * as React from "react"

const useSwitch = () => {
  const [checked, setChecked] = React.useState<boolean>(
    Boolean(localStorage.getItem("checked") == "false" ? true : false)
  )

  const handleSwitch = () => {
    setChecked(!checked)
    if (checked === true) {
      localStorage.setItem("checked", "true")
    } else {
      localStorage.setItem("checked", "false")
    }
  }

  return {
    checked,
    handleSwitch,
  }
}

export default useSwitch
