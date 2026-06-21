import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Browse(){
  const[query, setQuery] = useState('') //teks yang diketik user
  const[meals, setMeals] = useState([]) // hasil pencarian
  const[loading ,setLoading] = useState(false)
  const[sudahCari,setSudahCari] = useState(false) // buat tau udah pernah search

  // pas pertama buka halaman, langsung search default biar gak kosong
  useEffect(() => {
    searchMeals('chicken')
  },[])
  async function searchMeals(keyword){
    setLoading(true)
    setSudahCari(true)
    try {
      const response = await fetch('`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`')
      const data = await response.json()
      setMeals(data.meals || []) // API akan bilikin null jika gak ketemu
    } catch (error){
      console.log('Gagal fetch:',error)
      setMeals([])
    }
    setLoading(false)
  }
  function handleSearchClick(){
    if (query.trim() === '') return // jangan search kalau kotak kosong
    searchMeals(query)
  }
  function handleKeyDown(e){
    if(e.key === 'Enter'){
      handleSearchClick()
    }
  }
  return(
     <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Cari Resep</h1>

      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Cari nama masakan... (contoh: pasta, chicken)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, padding: '10px 16px', border: '2px solid #ddd',
            borderRadius: '8px', fontSize: '1rem' }}
        />
        <button
          onClick={handleSearchClick}
          style={{ background: '#e05c2a', color: 'white', border: 'none',
            padding: '10px 24px', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
          Cari
        </button>
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Mencari resep...</p>}

      {!loading && sudahCari && meals.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          Resep tidak ditemukan. Coba kata kunci lain.
        </p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px' }}>
        {meals.map(meal => (
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={meal.strMealThumb} alt={meal.strMeal}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '0.95rem' }}>{meal.strMeal}</h3>
                <p style={{ fontSize: '0.8rem', color: '#888' }}>{meal.strCategory}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Browse;