import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {

const APP_ID = '0792501f';
const APP_KEY = 'fdf070695e8df1f0fe225dd600e33d00';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');


useEffect(() => {
  getRecipes(); 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [query]);
 
 
const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value); 
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch('');
}

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
    <center> <h1>Recipe App</h1></center>
    <br></br>

     <form onSubmit={getSearch} className="search-form">
        <input 
        
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}
        placeholder="Search for a Recipe (example 'chicken')"
        />

        <button className="search-button" type="submit">
          Search 
          </button>      
      </form> 
    <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}  //props will be passed to component
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        
          />
      ))}
      </div>
    </div> 
  );
}; 

export default App;
