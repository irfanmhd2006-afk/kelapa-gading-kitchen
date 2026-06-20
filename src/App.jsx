import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Home from './pages/Home'
import Browse from "./pages/Browse"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Favorites from "./pages/Favorites"
import Detail from "./pages/Detail"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/recipe/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App