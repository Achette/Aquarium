export type DeviceInfo = {
  device: Devices
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isMobileOrTablet: boolean
}

export type Devices = 'mobile' | 'tablet' | 'desktop'
