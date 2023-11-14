import React from "react";
import RecipeBox from './RecipeBox/RecipeBox.js';
import './Recipes.css';

interface RecipesProps {
    recipes: Array<Object>,
    togglePage: Number
}

const Recipes = ({recipes, togglePage}: RecipesProps) => {
    return (
        <div className="recipe-container">
            {
                recipes.map((recipe: any) => (
                    <RecipeBox key={recipe.id} togglePage={togglePage} recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default Recipes;