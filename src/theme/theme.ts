import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'ligth',
  },
  fonts: {
    body: `'Roboto', 'sans-serif'`,
  },
  colors: {
    blue: {
      50: '#0157A399', // Transparency
      400: '#3DC1FF', // Secondary
      900: '#0157A3', // Primary
    },
    white: {
      400: '#D9D9E3',
    },
    pink: {
      400: '#FC94D2', // Details
    },
    gray: {
      100: '#D9D9E3',
    },
  },
})
