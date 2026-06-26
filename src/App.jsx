import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Home from './pages/Home'
import Browse from "./pages/Browse"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Favorites from "./pages/Favorites"
import Detail from "./pages/Detail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
        
        <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/recipe/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>
        <Footer />
      </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App