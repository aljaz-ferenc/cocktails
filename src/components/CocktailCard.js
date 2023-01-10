import React, {useEffect, useRef, useState} from 'react'
import './CocktailCard.css'
import { Link } from 'react-router-dom'

export default function CocktailCard({showCocktail, favorites, id, name, description, ingredients, steps, image, category, handleAddToFavorites }) {

    const activateStar = () => {
        if(favorites.some(favorite => +favorite === +id)){
            return 'active'
        }
    }

    return (
        <Link to={`cocktails/${id}`} onClick={showCocktail} id={id} className='cocktail-card' key={Math.random()}>
            <div className='cocktail-card__image--container'>
                <div className='cocktail-card__image' alt="cocktail image"><img className='image-img' src={image} alt="cocktail image" />
                </div>
                <div className='cocktail-card__ingredients'>{ingredients.map(ing => {
                    return (
                        <div className='cocktail-card__ingredient' key={ing.name}>{ing.name}</div>
                    )
                })}</div>
            </div>
            <div className='cocktail-card__text-container'>
                <div className='cocktail-card__category'>{category.by_spirit.toUpperCase()}</div>
                <div className='cocktail-card__name'>{name}</div>
            </div>
        </Link>
    )
}

