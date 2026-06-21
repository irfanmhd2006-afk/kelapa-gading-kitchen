import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RecipeCard({meal}) {
    const navigate = useNavigate()
    const {user} = useAuth()

    const daftarFavorit = JSON.parse(localStorage.getItem('favorites') || '[]')
    const sudahFavorit = daftarFavorit.find(f => f.idMeal === meal.idMeal)

    function toggleFavorit(e){
        e.stopPropagation()
        e.preventDefault()

        if(!user){
            navigate('/login')
            return
        }

        let favs = JSON.parse(localStorage.getItem('favorites') || '[]')

        if(sudahFavorit){
            // kalau sudah ada, hapus dari daftar
            favs = favs.filter(f => f.idMeal !== meal.idMeal)
        } else {
            // kalau belum ada, tambahkan
            favs.push(meal)
        }

        localStorage.setItem('favorites', JSON.stringify(favs))
        window.location.reload()
    }

    return (
    <div
      onClick={() => navigate(`/recipe/${meal.idMeal}`)}
      style={{ background: 'white', borderRadius: '12px', overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', position: 'relative' }}
    >
      <img src={meal.strMealThumb} alt={meal.strMeal}
        style={{ width: '100%', height: '160px', objectFit: 'cover' }} />

      <button
        onClick={toggleFavorit}
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'white',
          border: 'none', borderRadius: '50%', width: '36px', height: '36px',
          fontSize: '1.1rem', cursor: 'pointer' }}>
        {sudahFavorit ? '❤️' : '🤍'}
      </button>

      <div style={{ padding: '12px' }}>
        <h3 style={{ fontSize: '0.95rem' }}>{meal.strMeal}</h3>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>{meal.strCategory}</p>
      </div>
    </div>
    )
}
export default RecipeCard