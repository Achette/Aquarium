import { Account, Home, Login, Register } from '@/routes'
import { Main } from '@/routes/Main'

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
          <Route path="/home" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
