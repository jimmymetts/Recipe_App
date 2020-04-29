import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

const APP_ID = '0792501f';
const APP_KEY = 'fdf070695e8df1f0fe225dd600e33d00';

const [recipes, setRecipes] = useState([]);


useEffect( () => {
  getRecipes();
}, []);  
 
const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits);
}

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search </button>
          
       
      </form>
      
    </div>
  );
}; 

export default App;
