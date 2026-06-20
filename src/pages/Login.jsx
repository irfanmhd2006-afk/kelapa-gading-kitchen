import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    if (!email || !password) {
      setError('Email dan password wajib diisi!')
      return
    }

    const berhasil = login(email, password)
    if (berhasil) {
      navigate('/')  // kalau sukses, balik ke home
    } else {
      setError('Email atau password salah!')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '32px',
      background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Login</h2>

      {error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '12px',
          border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '16px',
          border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
      />

      <button
        onClick={handleLogin}
        style={{ width: '100%', padding: '12px', background: '#e05c2a',
          color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
        Masuk
      </button>

      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.9rem' }}>
        Belum punya akun? <Link to="/register" style={{ color: '#e05c2a' }}>Daftar di sini</Link>
      </p>
    </div>
  )
}

export default Login