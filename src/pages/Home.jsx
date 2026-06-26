import RecipeCard from '../components/RecipeCard'
import myRecipes from '../data/myRecipes'

function Home() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Resep Andalan Kelapa Gading Kitchen</h1>

      <div  style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '16px', 
        marginTop: '20px', 
        padding: '0 16px' 
      }}>
        {myRecipes.map(meal => (
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

export default Home