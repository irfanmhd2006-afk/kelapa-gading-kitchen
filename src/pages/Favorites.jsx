import RecipeCard from '../components/RecipeCard'

function Favorites() {
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]')

  return (
    <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1>Resep Favorit ❤️</h1>

      {favs.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>
          Belum ada resep favorit.<br />
          Klik ikon 🤍 di kartu resep untuk menyimpan!
        </p>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '20px', 
          marginTop: '20px' 
        }}>
          {favs.map(meal => (
            <div key={meal.idMeal} style={{ width: '220px' }}>
              <RecipeCard meal={meal} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites