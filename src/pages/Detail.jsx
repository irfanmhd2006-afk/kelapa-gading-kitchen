import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import myRecipes from '../data/myRecipes'

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDetail() {
      // cek dulu, apakah ini id resep buatan sendiri?
      const resepSendiri = myRecipes.find(r => r.idMeal === id)

      if (resepSendiri) {
        // kalau ketemu di data sendiri, langsung pakai, gak perlu fetch API
        setMeal(resepSendiri)
        setLoading(false)
        return
      }

      // kalau bukan, baru fetch dari API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      setMeal(data.meals ? data.meals[0] : null)
      setLoading(false)
    }
    fetchDetail()
  }, [id])

  if (loading) {
    return <p style={{ padding: '40px', textAlign: 'center' }}>Memuat detail resep...</p>
  }

  if (!meal) {
    return <p style={{ padding: '40px', textAlign: 'center' }}>Resep tidak ditemukan</p>
  }

  // cek dulu apakah meal.bahanBahan sudah ada (berarti resep sendiri)
  // kalau belum ada, berarti dari API, jadi diambil dari format strIngredient1, dst
  let bahanBahan = meal.bahanBahan

  if (!bahanBahan) {
    bahanBahan = []
    for (let i = 1; i <= 20; i++) {
      const bahan = meal[`strIngredient${i}`]
      const takaran = meal[`strMeasure${i}`]
      if (bahan && bahan.trim() !== '') {
        bahanBahan.push(`${takaran} ${bahan}`)
      }
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: '2px solid #e05c2a', color: '#e05c2a',
          padding: '8px 16px', borderRadius: '8px', marginBottom: '20px', cursor: 'pointer' }}>
        ← Kembali
      </button>

      <img src={meal.strMealThumb} alt={meal.strMeal}
        style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', borderRadius: '12px' }} />

      <h1 style={{ marginTop: '20px' }}>{meal.strMeal}</h1>
      <p style={{ color: '#888' }}>📂 {meal.strCategory} · 🌍 {meal.strArea}</p>

      <h2 style={{ marginTop: '24px' }}>Bahan-bahan</h2>
      <ul>
        {bahanBahan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: '24px' }}>Cara Memasak</h2>
      <p style={{ lineHeight: '1.8', whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>
    </div>
  )
}

export default Detail