import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CocktailsContext } from '../App'
import './RecipePage.css'

export default function RecipePage() {
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
    <section className='recipe-section'>
      <div className='recipe'>
        <img className='recipe__image' src={cocktail.image} />
        <div className='recipe__text--description'>
          <h2>About the {cocktail.name}</h2>
            {description}
        </div>
        <div className='recipe__text--ingredients'>
          <h2>INGREDIENTS</h2>
            <ul className='recipe__ingredients'>
              {ingredients}
            </ul>
        </div>
        <div className='recipe__text--steps'>
          <h2>STEPS</h2>
          <ol>
            {steps}
          </ol>
        </div>
      </div>
      <div>
        {/* {similarCocktails} */}
      </div>
    </section>
  )
}
