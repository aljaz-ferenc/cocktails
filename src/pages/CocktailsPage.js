import React, { Fragment, useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CocktailsContext } from '../App'
import CocktailCard from '../components/CocktailCard'
import './CocktailsPage.css'
import Categories from '../components/Categories'

export default function CocktailsPage({ category, handleAddToFavorites, showCocktail, handleCategoryClick }) {
    const cocktails = useContext(CocktailsContext)
    const [filteredCocktails, setFilteredCocktails] = useState(cocktails)
    const [favoriteCocktailsID, setFavoriteCocktailsID] = useState([])
    const [favoriteCocktails, setFavoriteCocktails] = useState([])

    // const favoritesRef = useRef()
    // const favoriteCocktailRef = useRef()

    useEffect(() => {
        if (category === 'all') {
            setFilteredCocktails(cocktails)
            return
        }
        if (category === 'favorites') {
            setFilteredCocktails(favoriteCocktails)
            return
        }
        const filteredCocktails = (cocktails.filter(cocktail =>
            cocktail.category.by_spirit === category
        ))
        setFilteredCocktails(filteredCocktails)
    }, [category, favoriteCocktails])


    function handleAddToFavorites(e) {
        const clickedCocktail = e.target.closest('.cocktail-card')
        if (favoriteCocktailsID.some(cocktail => cocktail === clickedCocktail.id)) {
            const index = favoriteCocktailsID.indexOf(clickedCocktail.id)
            favoriteCocktailsID.splice(index, 1)
            const newCocktails = favoriteCocktailsID
            setFavoriteCocktailsID([...newCocktails])
        } else {
            setFavoriteCocktailsID(prevFavorite => [...prevFavorite, clickedCocktail.id])
        }
    }

    useEffect(() => {
        const favoriteCocktails = []
        cocktails.forEach(cocktail => {
            favoriteCocktailsID.forEach(favorite => {
                if (cocktail.id === +favorite) {
                    favoriteCocktails.push(cocktail)
                }
            })
        })
        setFavoriteCocktails(favoriteCocktails)
    }, [favoriteCocktailsID])


    return (
        <section className='cocktails-page'>
            <Categories handleCategoryClick={handleCategoryClick} />
            <div className='cocktails-list'>
                {filteredCocktails.map((cocktail, index) => {
                    return (
                            <CocktailCard
                                key={index}
                                name={cocktail.name}
                                description={cocktail.description}
                                steps={cocktail.steps}
                                ingredients={cocktail.ingredients}
                                image={cocktail.image}
                                category={cocktail.category}
                                id={cocktail.id}
                                showCocktail={showCocktail}
                                handleAddToFavorites={handleAddToFavorites}
                                favorites={favoriteCocktailsID}
                            />
                    )
                })}
            </div>
        </section>
    )
}

