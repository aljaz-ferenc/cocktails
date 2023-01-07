import React, { useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CocktailsContext } from '../App'
import CocktailCard from '../components/CocktailCard'
import './CocktailsPage.css'
import Categories from '../components/Categories'

export default function CocktailsPage({ category, handleAddToFavorites, handleCategoryClick, favorites }) {
    const cocktails = useContext(CocktailsContext)
    const [filteredCocktails, setFilteredCocktails] = useState(cocktails)
    const [favoriteCocktailsID, setFavoriteCocktailsID] = useState([])
    const [favoriteCocktails, setFavoriteCocktails] = useState([])


    useEffect(() => {
        if (category === 'all') {
            setFilteredCocktails(cocktails)
            return
        }
        if (category === 'favorites') {
            let favoriteCocktails = []
            favorites.map(fav => {
                cocktails.map(item => {
                    if(+fav === item.id){
                        favoriteCocktails.push(item)
                    }
                })
            })
            setFilteredCocktails(favoriteCocktails)
            return
        }
        const filteredCocktails = (cocktails.filter(cocktail =>
            cocktail.category.by_spirit === category
        ))
        setFilteredCocktails(filteredCocktails)
    }, [category, favoriteCocktails])


    return (
        <section className='cocktails-page'>
            <Categories category={category} handleCategoryClick={handleCategoryClick} />
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
                                handleAddToFavorites={handleAddToFavorites}
                                favorites={favoriteCocktailsID}
                            />
                    )
                })}
            </div>
        </section>
    )
}

