import RecipeCard from '../components/RecipeCard'
import myRecipes from '../data/myRecipes'

function Home() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Resep Andalan Kelapa Gading Kitchen</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px', marginTop: '20px' }}>
        {myRecipes.map(meal => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default Home