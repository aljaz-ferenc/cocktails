import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { CocktailsContext } from '../App'
import './RecipePage.css'
import starSolid from '../icons/star-filled.png'


export default function RecipePage({ handleAddToFavorites, handleRemoveFromFavorites, favorites }) {
  const params = useParams()
  const ctx = useContext(CocktailsContext)
  const id = params.cocktailId
  const cocktail = ctx[id]


  const steps = cocktail.steps.map(step => {
    return <li key={step}>{step}</li>
  })

  const ingredients = cocktail.ingredients.map(ingredient => {
    return <li key={ingredient.name}><span>{ingredient.unit}</span> <span>{ingredient.name}</span></li>
  })

  const description = cocktail.description.map((description, i) => {
    return <div key={description[i]}>{description}</div>
  })

  return (
    <>
      <section className='recipe-section'>
        <div>
          <Link to='/cocktails' className='recipe-section__back-btn'>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
            </svg>
            <span>Back to Cocktails</span>
          </Link>
            <h2 className='recipe__name'>{cocktail.name}</h2>
        </div>
        {favorites.some(fav => fav === id) || <img src={starSolid} id={id} className='fav-icon' onClick={handleAddToFavorites} title='Add to favorites' />}
        {favorites.some(fav => fav === id) && <img src={starSolid} id={id} className='fav-icon active' onClick={handleRemoveFromFavorites} />}
        <div className='recipe'>
          <img className='recipe__image' src={cocktail.image} />
          <div className='recipe__text--ingredients'>
            <h2>INGREDIENTS</h2>
            <ul className='recipe__ingredients'>
              {ingredients}
            </ul>
          </div>
          <div className='recipe__text--steps'>
            <h2>STEPS</h2>
            <ol className='recipe__steps'>
              {steps}
            </ol>
          </div>
          <div className='recipe__text--description'>
            {description}
          </div>
        </div>
        <div>
        </div>
      </section>
    </>
  )
}
