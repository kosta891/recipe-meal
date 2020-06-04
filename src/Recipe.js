import React from 'react'
import style from './recipe.module.css'
const Recipe = ({ title, image, calories, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>  
            <ol>
                {ingredients.map(ingredient => {
                    return (
                        <li> {ingredient.text} </li>
                    )
                })}
            </ol>
            <p>{calories} Calories</p>
            <img className={style.image} src={image} alt={title} />
        </div>
    )
}

export default Recipe
