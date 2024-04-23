import React from 'react'
import App from './page/App.tsx'
import ReactDOM from 'react-dom/client'
import { theme } from './theme/theme.ts'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
