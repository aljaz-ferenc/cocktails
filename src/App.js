import React, { createContext, useState, useEffect } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import CocktailsPage from './pages/CocktailsPage';
import RecipePage from './pages/RecipePage';
import Header from './components/Header';
import recipes from './recipes.json'

export const CocktailsContext = createContext()

function App() {
  const [cocktails, setCocktails] = useState()
  const [category, setCategory] = useState('all')

  function handleCategoryClick(e) {
    setCategory(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={WelcomePage} />
          <CocktailsContext.Provider value={recipes}>
            <Route path='/cocktails' exact >
              <CocktailsPage handleCategoryClick={handleCategoryClick} category={category} />
            </Route>
            <Route path='/cocktails/:cocktailId'>
              <RecipePage />
            </Route>
          </CocktailsContext.Provider>
        </Switch>
      </main>
      <div className="divider1">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="divider2">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="divider3">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
