import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router
