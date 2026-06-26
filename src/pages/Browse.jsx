import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import myRecipes from '../data/myRecipes'



function Browse() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [sudahCari, setSudahCari] = useState(false)

  useEffect(() => {
    searchMeals('chicken')
  }, [])

  async function searchMeals(keyword) {
    setLoading(true)
    setSudahCari(true)

    // cari dulu di resep lokal kita
    const keyword_lower = keyword.toLowerCase()
    const hasilLokal = myRecipes.filter(r =>
      r.strMeal.toLowerCase().includes(keyword_lower) ||
      r.strCategory.toLowerCase().includes(keyword_lower) ||
      r.strArea.toLowerCase().includes(keyword_lower)
    )

    // cari juga di API TheMealDB
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      const data = await response.json()
      const hasilAPI = data.meals || []

      // gabungkan: resep lokal duluan, baru dari API
      setMeals([...hasilLokal, ...hasilAPI])
    } catch (error) {
      console.log('Gagal fetch:', error)
      // kalau API error, tetap tampilin resep lokal
      setMeals(hasilLokal)
    }

    setLoading(false)
  }

  function handleSearchClick() {
    if (query.trim() === '') return
    searchMeals(query)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSearchClick()
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Cari Resep</h1>
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Cari nama masakan... (contoh: ayam, pempek, pasta)"
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

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '20px'
      }}>
      {meals.map(meal => (
        <div className = "recipe-container" key={meal.idMeal} style={{ 
        width: 'calc(25% - 12px)',
        minWidth: '160px'
      }}>
        <RecipeCard meal={meal} />
      </div>
  ))}
</div>
    </div>
  )
}

export default Browse