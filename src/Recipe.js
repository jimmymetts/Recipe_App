import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients, fat}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ol>
                 {ingredients.map(ingredient => (
                     <li>{ingredient.text}</li>
                 ))}
            </ol>
            <p>Calories: {Math.round(calories)}</p>
            
        </div>
    );
}

export default Recipe;