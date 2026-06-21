import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

function Home(){
  const [meals, setMeals] = useState([])
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomMeals() {
      const hasil = []
      //ambil 6 resep
      for (let i = 0; i < 6; i++) {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await response.json()
        hasil.push(data.meals[0])
      }
      setMeals(hasil)
      setLoading(false)
    }
    fetchRandomMeals()
  },[])

   if (loading) {
    return <p style={{ padding: '40px', textAlign: 'center' }}>Memuat resep...</p>
  }
   return (
    <div style={{ padding: '24px' }}>
      <h1>Resep Pilihan Hari Ini</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px', marginTop: '20px' }}>

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





export default Home;