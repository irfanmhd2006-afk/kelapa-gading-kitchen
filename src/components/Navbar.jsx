import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav style={{ background: '#e05c2a', padding: '14px 24px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center' }}>

      <Link to="/" style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold',
        textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src="https://www.themealdb.com/images/logo-small.png"
          alt="logo"
          style={{ height: '32px', borderRadius: '6px' }}
        />
        Kelapa Gading Kitchen
      </Link>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/browse" style={{ color: 'white', textDecoration: 'none' }}>Cari Resep</Link>

        {user && <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorit</Link>}

        {user ? (
          <button
            onClick={handleLogout}
            style={{ background: 'white', color: '#e05c2a', border: 'none',
              padding: '6px 14px', borderRadius: '6px', cursor: 'pointer' }}>
            Logout ({user.name})
          </button>
        ) : (
          <Link to="/login" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar