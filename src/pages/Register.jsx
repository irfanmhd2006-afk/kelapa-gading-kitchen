import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { register } = useAuth()
  const navigate = useNavigate()

  function handleRegister() {
    // validasi sederhana
    if (!name || !email || !password) {
      setError('Semua field wajib diisi!')
      return
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter')
      return
    }

    const berhasil = register(name, email, password)
    if (berhasil) {
      navigate('/login')  // kalau sukses, pindah ke login
    } else {
      setError('Email sudah terdaftar!')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '32px',
      background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Daftar Akun</h2>

      {error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}

      <input
        type="text"
        placeholder="Nama lengkap"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '12px',
          border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
      />
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
        placeholder="Password (min 6 karakter)"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '16px',
          border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
      />

      <button
        onClick={handleRegister}
        style={{ width: '100%', padding: '12px', background: '#e05c2a',
          color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
        Daftar
      </button>

      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.9rem' }}>
        Sudah punya akun? <Link to="/login" style={{ color: '#e05c2a' }}>Login di sini</Link>
      </p>
    </div>
  )
}

export default Register