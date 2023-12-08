import React from "react";
import CategoryBox from '../CategoryBoxes/CategoryBox';
import './Recipes.css';

interface RecipesProps {
    recipes: Array<Object>,
    togglePage: Number
}

const Recipes = ({categories, togglePage}: RecipesProps) => {
    

    return (
        <div className="recipe-boxes-container">
            {
                categories.map((recipe: any) => (
                    <CategoryBox key={recipe.id}  recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default Recipes;