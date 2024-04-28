import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Account, Home, Login, NewAquarium, Register, Main } from '@/routes'

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
          <Route path="/new-aquarium" element={<NewAquarium />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
