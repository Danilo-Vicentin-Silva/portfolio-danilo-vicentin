import React from "react"
import "../styles/animations/animations.css"

const useAnimation = () => {
  const elementRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
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

  React.useEffect(() => {
    if (windowWidth >= 768) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true)
          elementRef.current?.classList.add("entrance-animation")
        }
      })
      observer.observe(elementRef.current as Element)
      return () => observer.disconnect()
    } else {
      setIsVisible(true)
    }
  }, [elementRef, windowWidth])

  return {
    elementRef,
    isVisible,
  }
}

export default useAnimation
