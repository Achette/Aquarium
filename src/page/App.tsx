import { Home } from '@/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='/account' index />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
