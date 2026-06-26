import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    logout()
    navigate('/login')
    setMenuOpen(false)
  }

  return (
    <nav style={{ 
      background: '#e05c2a', 
      padding: '14px 20px', 
      position: 'sticky',
      top: 0, 
      zIndex: 100,
      width: '100%',             /* SOLUSI: Mengunci navbar agar melebar penuh */
      boxSizing: 'border-box'    /* SOLUSI: Mencegah padding merusak lebar 100% */
    }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

        {/* Logo */}
        <Link to="/" style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold',
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="https://www.themealdb.com/images/logo-small.png" alt="logo"
            style={{ height: '28px', borderRadius: '4px' }} />
          Kelapa Gading Kitchen
        </Link>

        {/* Hamburger button - hanya muncul di mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white',
            fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}
          className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menu desktop */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/browse" style={{ color: 'white', textDecoration: 'none' }}>Cari Resep</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>Tentang Kami</Link> {/* Sinkronisasi Menu Desktop */}
          {user && <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorit</Link>}
          {user ? (
            <button onClick={handleLogout}
              style={{ background: 'white', color: '#e05c2a', border: 'none',
                padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
              Logout ({user.name || user.nama})
            </button>
          ) : (
            <Link to="/login" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Menu mobile - muncul kalau hamburger diklik */}
      {menuOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px',
          marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.3)' }}>
          <Link to="/" onClick={() => setMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none' }}>Cari Resep</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none' }}>Tentang Kami</Link>
          {user && <Link to="/favorites" onClick={() => setMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none' }}>Favorit</Link>}
          {user ? (
            <button onClick={handleLogout}
              style={{ background: 'white', color: '#e05c2a', border: 'none',
                padding: '8px 14px', borderRadius: '6px', cursor: 'pointer',
                fontWeight: 600, width: 'fit-content' }}>
              Logout ({user.name || user.nama})
            </button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}
              style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Login</Link>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar;