import { useEffect, useRef, useState } from "react"

const useVisibleElement = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current
      if (!element) return

      const { top, bottom } = element.getBoundingClientRect()
      const isVisible = top < window.innerHeight && bottom >= 0

      setIsVisible(isVisible)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { elementRef, isVisible }
}

export default useVisibleElement
