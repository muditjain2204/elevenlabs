import * as React from "react"

const MOBILE_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Defer the initial state set to avoid calling setState synchronously within the effect body
    queueMicrotask(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    })

    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}








// const [isMobile, setIsMobile] = React.useState(() => {
//   if (typeof window === "undefined") return false
//   return window.innerWidth < MOBILE_BREAKPOINT
// })

// React.useEffect(() => {
//   const mql = window.matchMedia(
//     `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
//   )

//   const onChange = () => {
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//   }

//   mql.addEventListener("change", onChange)

//   return () => {
//     mql.removeEventListener("change", onChange)
//   }
// }, [])

// };