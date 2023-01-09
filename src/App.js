import React, { createContext, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import CocktailsPage from './pages/CocktailsPage';
import RecipePage from './pages/RecipePage';
import Header from './components/Header';
import recipes from './recipes.json'

export const CocktailsContext = createContext()

function App() {
  const [category, setCategory] = useState('all')
  const [favorites, setFavorites] = useState([])

  function handleCategoryClick(e) {
    setCategory(e.target.value)
  }

  function handleAddToFavorites(e) {
    if (favorites.some(fav => fav === e.target.id)) return
    setFavorites(prevFav => [...prevFav, e.target.id])
  }

  function handleRemoveFromFavorites(e) {
    if (favorites.some(item => item === e.target.id)) {
      const newFavorites = favorites.filter(item => item !== e.target.id)
      setFavorites(newFavorites)
    }
  }


  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={WelcomePage} />
          <CocktailsContext.Provider value={recipes}>
            <Route path='/cocktails' exact >
              <CocktailsPage favorites={favorites} handleCategoryClick={handleCategoryClick} category={category} />
            </Route>
            <Route path='/cocktails/:cocktailId'>
              <RecipePage favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites} handleAddToFavorites={handleAddToFavorites} />
            </Route>
          </CocktailsContext.Provider>
        </Switch>
      </main>
    </div>
  );
}

export default App;
