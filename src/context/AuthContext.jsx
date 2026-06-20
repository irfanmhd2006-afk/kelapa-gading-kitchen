import {createContext, useContext, useState} from 'react';
//wadah global
const AuthContext = createContext(null)

export function AuthProvider({children}){
    //cek storage kalau pernah login sebelumnya langsung masuk
    const [user,setUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    })

    function register(nama,email,password){
        //ambil daftar user yang sudah ada
        const users = JSON.parse(localStorage.getItem('users') || '[]')

        //cek apakah email sudah dipakai
        const sudahada = users.find(u => u.email == email)
        if(sudahada) return false // gagal jika sudah ada

        //simpan user baru ke daftar
        users.push({nama,email,password})
        localStorage.setItem('users',JSON.stringify(users))
        return true //berhasil
    }
    function login(email,password) {
        const users = JSON.parse(localStorage.getItem('users')|| '[]')

        //cek apakah email ada
        const found = users.find(u => u.email === email && u.password === password)
        if(!found) return false //tidak ditemukan

        //simpan user yang sedang login
        const userdata = {name : found.nama,email : found.email}
        setUser(userdata)
        localStorage.setItem('user',JSON.stringify(userdata))
        return true
    }
    function logout(){
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
// 3. Custom hook biar gampang dipanggil di komponen lain
export function useAuth() {
  return useContext(AuthContext)
}
