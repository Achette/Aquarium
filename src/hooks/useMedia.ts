import React from 'react'
import { BREAKPOINTS, DeviceInfo, Devices } from '@/utils'

export const isServer = typeof window === 'undefined'

export const fullDeviceInfo: (device: Devices) => DeviceInfo = (device) => ({
  device: device,
  isMobile: device === 'mobile',
  isTablet: device === 'tablet',
  isDesktop: device === 'desktop',
  isMobileOrTablet: device === 'mobile' || device === 'tablet',
})

const getMatches = (
  desktopMedia: MediaQueryList,
  tabletMedia: MediaQueryList
): Devices => {
  const isDesktop = desktopMedia.matches
  const isTablet = tabletMedia.matches

  if (isDesktop) return 'desktop'
  if (isTablet) return 'tablet'
  return 'mobile'
}

export const getInitialDevice = (desktop: string, tablet: string): Devices => {
  if (isServer) return 'desktop'

  return getMatches(window.matchMedia(desktop), window.matchMedia(tablet))
}

export const useMedia = () => {
  const tabletQuery = `(min-width: ${BREAKPOINTS.tablet})`
  const desktopQuery = `(min-width: ${BREAKPOINTS.desktop})`

  const [device, setDevice] = React.useState<Devices>(() =>
    getInitialDevice(desktopQuery, tabletQuery)
  )

  React.useEffect(() => {
    let mounted = true
    const desktopMedia = window.matchMedia(desktopQuery)
    const tabletMedia = window.matchMedia(tabletQuery)

    const handleResizeScreen = (
      event: MediaQueryListEvent,
      deviceMatch: Devices,
      deviceDontMatch: Devices
    ) => {
      if (!mounted) return
      const device = event.matches ? deviceMatch : deviceDontMatch
      setDevice(device)
    }

    desktopMedia.addEventListener('change', (event) =>
      handleResizeScreen(event, 'desktop', 'tablet')
    )
    tabletMedia.addEventListener('change', (event) =>
      handleResizeScreen(event, 'tablet', 'mobile')
    )

    return () => {
      mounted = false
      desktopMedia.removeEventListener('change', (event) =>
        handleResizeScreen(event, 'desktop', 'tablet')
      )
      tabletMedia.removeEventListener('change', (event) =>
        handleResizeScreen(event, 'tablet', 'mobile')
      )
    }
  }, [desktopQuery, tabletQuery])

  const deviceInfo = React.useMemo(() => fullDeviceInfo(device), [device])

  return deviceInfo
}
