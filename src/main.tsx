import React from 'react'
import App from './page/App.tsx'
import ReactDOM from 'react-dom/client'
import { theme } from './theme/theme.ts'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { AquariumProvider } from './context/index.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AquariumProvider>
          <App />
        </AquariumProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
