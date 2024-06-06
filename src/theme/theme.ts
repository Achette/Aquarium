import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'ligth',
  },
  fonts: {
    body: `'Roboto', 'sans-serif'`,
    heading: `'Roboto', 'sans-serif'`,
  },
  colors: {
    blue: {
      50: '#0157A31A', // Transparency
      100: '#DCF4FF',
      400: '#3DC1FF', // Secondary
      900: '#0157A3', // Primary
    },
    white: {
      400: '#D9D9E3',
      900: '#FFF',
    },
    pink: {
      400: '#FC94D2', // Details
    },
    gray: {
      100: ' #12121D4D',
      400: '#898A8D',
    },
  },
})
