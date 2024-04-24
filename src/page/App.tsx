import { Account, Home, Login, Register } from '@/routes'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />}>
            <Route index element={<Login />} />
            <Route path="/account/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
