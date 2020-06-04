import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const APP_ID = '5b750bd3'
  const APP_KEY = 'd08c9545bb80da0985cda3f7cf8dea32'
  const example = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  
  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()
    setRecipes(data.hits)
  }
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      
      <form className='search-form'
        type='submit'
        onSubmit={getSearch}
      >
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button
          className='search-button'
         
          
        >
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => {
          return (
            < Recipe
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
