import * as React from "react"

const MOBILE_BREAKPOINT = 768

function subscribeToMobileBreakpoint(callback: () => void) {
  const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  query.addEventListener("change", callback)
  return () => query.removeEventListener("change", callback)
}

function getMobileSnapshot() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

function getServerMobileSnapshot() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribeToMobileBreakpoint,
    getMobileSnapshot,
    getServerMobileSnapshot
  )
}
